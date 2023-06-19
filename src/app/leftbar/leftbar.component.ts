import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent {
  
constructor(public loginService:LoginService){}

  collapsed = false;
  isactive = false;

  collapseopt():void{
    if( this.collapsed == true){
      this.collapsed = false;
    }
    else{
      this.collapsed = true;
      }
  }

  changeactive():void{
    this.collapsed = false;  
  }
}
