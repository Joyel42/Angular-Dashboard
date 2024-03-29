import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  serverresponse:string='';
    
  loginform = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
  });

  get email(){
    return this.loginform.get('email');
  }

  get password(){
    return this.loginform.get('password');
  }

  constructor(private loginservice: LoginService ,private router:Router){}

  submitform(){
    this.loginservice.apiresponse(this.loginform.value)
    .subscribe(data => {
      console.log("Authenticated Successfully :"+ data.statusText);
      this.serverresponse = '';
      if(data.success === true){
        this.loginservice.changeflag();
        window.localStorage.setItem("loginflag","true");
        window.localStorage.setItem("token",data.results.token);
        this.router.navigate(['/dashboard']);
      }
      this.loginservice.decodedjwt(data.results);
      console.log("Hello Team")
    }, 
    error =>{
      this.serverresponse = error.statusText;
    }
    )
  }
}
