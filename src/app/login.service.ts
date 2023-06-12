import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  constructor(private httpclient:HttpClient){}
  
  api = 'http://testvedika.atai.ai/api/login/';
  isLogined:boolean=false;

  apiresponse(logindetails):Observable<any>{
    return this.httpclient.post(this.api,logindetails);
  }

  decodedjwt(tkn){
  var token:any = Object.values(tkn);
  var decodedjwt = jwt_decode(token[0]);
  console.log("Decoded JWT Token = ", decodedjwt);
  }

  changeflag(){
    this.isLogined = !this.isLogined;
    console.log(this.isLogined);
    this.getflag();
  }

  getflag(){
    console.log("getflag is called ......",this.isLogined);
    return this.isLogined;
  }
}
