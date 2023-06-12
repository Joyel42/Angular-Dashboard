import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import tabledatas from './test.json';  

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
constructor(private loginService:LoginService){}
  signout(){
    this.loginService.changeflag();
  }

  jsondata:any = tabledatas;
  jsonDataKeys : any;
  ngOnInit(): void {
      this.jsonDataKeys = Object.keys(this.jsondata[0][0]);
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
