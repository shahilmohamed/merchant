import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private service: HttpService) {}

  ngOnInit(): void {}
  
  incorrect:string="";
  email_pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$';
  password_pattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  password: string = '';
  mobile_pattern = /^(?:\+91[\-\s]?)?[6-9]\d{9}$/;

  onSubmit(f: any) {
    let obj = {
      userid: f.value.userid,
      fname: f.value.fname,
      lname: f.value.lname,
      email: f.value.email,
      username: f.value.username,
      password: f.value.password,
      mobile: f.value.mobile,
      gender: f.value.gender,
      address: f.value.address,
      city: f.value.city,
    };
    this.service.signup(obj)
    .subscribe((response:any)=>
    {
      console.log(response);
      if(response.msg=="Account created")
      {
        this.incorrect=response.msg;
      }
      else{
        this.incorrect=response.msg;
      }
    })
  }
}
