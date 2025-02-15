import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:HttpService, 
              private router:Router,
              private title:Title) { }
  userid:string|null="";

  ngOnInit(): void {
    this.userid=sessionStorage.getItem("userid");
    this.title.setTitle("Add Product");
  }
  onSubmit(f:NgForm){
    let obj={
      brand:f.value.bname,
      category:f.value.cname,
      price:f.value.pricename,
      stock:f.value.stockname
    }
    this.service.addProducts(this.userid,obj).subscribe((response:any)=>
    {
      this.router.navigate(['/home']);
    })

  }

}
