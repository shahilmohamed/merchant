import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  issubmitDisabled:boolean=true;
  backendResponse:string='';
  @Input() ParentData:any=<Product>{};
  constructor(private service:HttpService) { }

  ngOnInit(): void {
  }
  onupdate()
  {
    this.service.updateProduct(this.ParentData).subscribe((response)=>
    {
      this.issubmitDisabled=false;
      this.backendResponse=response;
    });
  }

}
