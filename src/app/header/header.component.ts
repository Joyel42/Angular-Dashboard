import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public loginService:LoginService ){ }


  name:string = "";

  ngOnInit(): void {
    var a = window.localStorage.getItem("jwt");
    var b = JSON.parse(a);
    this.name = b.emp_name;
  }

  collapsesidebar():void{


    if (this.loginService.isSidebarNotVisible == false) {
      this.loginService.isSidebarNotVisible = true;
    } else {
      this.loginService.isSidebarNotVisible = false;
    }
  }

  settings():void{

    if(this.loginService.settingsopened == false){
      this.loginService.settingsopened = true;
    }
    else{
      this.loginService.settingsopened = false;
    }
  }
}
