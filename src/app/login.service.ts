import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor(private httpclient:HttpClient, private router:Router){}
  
  api = 'http://testvedika.atai.ai/api/login/';
  isLogined:boolean=false;

  ngOnInit(): void {
    var a= localStorage.getItem("loginflag");  
    if(a == "true"){ 
      this.isLogined = true;
    }
  }

  apiresponse(logindetails):Observable<any>{
    return this.httpclient.post(this.api,logindetails);
  }

  decodedjwt(tkn){
  var token:any = Object.values(tkn);
  var decodedjwt = jwt_decode(token[0]);
  console.log("Decoded JWT Token = ", decodedjwt);
  window.localStorage.setItem("jwt",JSON.stringify(decodedjwt));

  }

  changeflag(){
    this.isLogined = !this.isLogined;
    console.log(this.isLogined);
    this.getflag();
  }

  getflag(){
    var a= localStorage.getItem("loginflag");  
    if(a == "true"){ 
      this.isLogined = true;
    }
    console.log("getflag is called ......",this.isLogined);
    return this.isLogined;
  }
}
