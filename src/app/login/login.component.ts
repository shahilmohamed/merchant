import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private service:HttpService , private router:Router) { }

  ngOnInit(): void {
    document.body.className="bg_background";
  }


  email_pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$';
  password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  msg:any="";
  
  onSubmit(f:any)
  {
    let obj ={
      email: f.value.email,
      password: f.value.password
    };
    this.service.login(obj)
    .subscribe((response:any)=>
    {
      if(response.msg=='Login successfully')
      {
        this.router.navigate(['/home']);
        sessionStorage.setItem("username",response.object.username);
        sessionStorage.setItem("userid",response.object.userid);
      }
      else{
        this.msg=response.msg;
      }
    })
  }

  ngOnDestroy(): void {
    document.body.className='';
  }

}
