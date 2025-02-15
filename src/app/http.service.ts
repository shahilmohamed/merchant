import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  // private url:string='http://localhost:8080';
  private url:string=environment.url;

  signup(obj:any)
  {
    return (this.http.post(`${this.url}/signup`,obj));
  }
  login(obj:any)
  {
    return (this.http.post(`${this.url}/login`,obj));
  }
  getAllProductById(id:string)
  {
    return (this.http.get(`${this.url}/getproductsByMerchantId/${id}`));
  }
  getParticularProduct(id:any)
  {
    return this.http.get(`${this.url}/getproductById/${id}`)
  }
  addProducts(id:any,obj:any)
  {
    return this.http.post(`${this.url}/addProduct/${id}`,obj,{
      responseType:'text'
    });
  }
  updateProduct(obj:any)
  {
    return this.http.put(`${this.url}/updateProduct`,obj,{
      responseType:"text"
    });
  }
  deleteProduct(id:any)
  {
    return this.http.delete(`${this.url}/deleteProduct/${id}`,{
      responseType:'text'
    });
  }
}
