import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Product } from '../model/product';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute, 
              private service:HttpService,
              private modalservice:BsModalService,
              private dialogservice:DialogService
  ) { }

  ngOnInit(): void {
    this.getdataFromUrl();
  }

  prodobj:any=<Product>{};
  modalRef!: BsModalRef;
  config={
    animated:true,
    ignoreBackdropClick:true,
    class: "alert alert-danger"
  };

  getdataFromUrl()
  {
    this.router.paramMap
    .subscribe((param)=>
    {
      this.service.getParticularProduct(param.get("id"))
      .subscribe((response:any)=>
      {
        this.prodobj=response;
      })
    })
  }
  onUpdate(popUp:TemplateRef<any>)
  {
    this.modalRef=this.modalservice.show(popUp,this.config);
  }

}
