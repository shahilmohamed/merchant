import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap';
import { Product } from '../model/product';
import { DialogService } from '../dialog.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  userid:string|null='';
  productData:any[]=[];
  modalRef!: BsModalRef;
  isRadioCheck:boolean=false;
  config={
    animated:true,
    ignoreBackdropClick:true,
    class: "alert alert-danger"
  };
  productObj=<Product>{};
  p:number=1;

  constructor(private service:HttpService, 
    private modalservice:BsModalService,
    private dialogservice:DialogService,
    private toastr:ToastrService,
    private title:Title) { }

  ngOnInit(): void {
    this.userid=sessionStorage.getItem("userid");
    this.getProducts(this.userid);
    this.title.setTitle("Dashboard")
  }

  getProducts(userid:any)
  {
    this.service.getAllProductById(userid)
    .subscribe((response:any)=>
  {
    this.productData=response;
  })

  }
  
  onRadioclick(item:any)
  {
    this.isRadioCheck=true;
    this.productObj=item;
    
  }

  onUpdate(popUp:TemplateRef<any>)
  {
    if(this.isRadioCheck)
    {
      this.modalRef=this.modalservice.show(popUp,this.config);
    }
    else{
      this.toastr.error("Please select record to update....")
    }
  }

  onDelete()
  {
    if(this.isRadioCheck)
      {
        this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
        .afterClosed()
        .subscribe((res)=>
        {
          if(res)
          {
            this.service.deleteProduct(this.productObj.id)
            .subscribe((response:string)=>
            {
              this.toastr.success(response);
              this.getProducts(sessionStorage.getItem("userid"));
              this.productObj=<Product>{};
              this.isRadioCheck=false;
            })
          }
          else{
            this.toastr.warning("Record is not deleted")
          }
        })
      }
      else{
        this.toastr.error("Please select record to delete....")
      }
  }

}
