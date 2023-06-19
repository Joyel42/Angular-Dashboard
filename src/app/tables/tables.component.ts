import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import tabledatas from './test.json';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
tex: any;
constructor(public loginService:LoginService, private router:Router){}

signout(){
  this.loginService.changeflag();
  window.localStorage.setItem("loginflag","false");
  this.router.navigate(["'/login'"]);
}

  jsondata:any = tabledatas;
  jsonDataKeys : any;
  name:string = "";
  email:string = '';

  ngOnInit(): void {
      this.jsonDataKeys = Object.keys(this.jsondata[0][0]);
      var a = window.localStorage.getItem("jwt");
      var b = JSON.parse(a);
      this.name = b.emp_name;
      this.email = b.email;
  }

  maincheck:any;
  childchecks:any;
  selectoptions():void{
    this.maincheck = document.getElementById("maincheck");
    this.childchecks = document.getElementsByClassName("checkboxes");
    if (this.maincheck.checked == true){
      for(let i =0; i< this.childchecks.length; i++){  
        this.childchecks[i].checked = true;
      }
    }
    else{
      for(let i =0; i< this.childchecks.length; i++){  
        this.childchecks[i].checked = false;
      }
    }
  }

  deselectoptions(){
    this.maincheck = document.getElementById("maincheck");
    this.childchecks = document.getElementsByClassName("checkboxes");
    for(let i =0; i< this.childchecks.length; i++){  
      if(this.childchecks[i].checked != true){
        this.maincheck.checked = false;
        break;
      }
      else{
        this.maincheck.checked = true;
      }
    }
  }
}
