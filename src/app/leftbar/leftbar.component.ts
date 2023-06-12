import { Component } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent {
  sidebarclosed = false;
  collapsed = true;
  settingsopened = false;
  clicked = false;
  defaultbtn:any = document.getElementById("defaultbtn");

  collapseopt():void{
    var collapseoptions:any;
    var down:any;
    var table:any;
    var dashbrd:any;
    var defaultbtn:any = document.getElementById("defaultbtn");
    defaultbtn.setAttribute("class","secondary-btns active1");
    table = document.getElementById("tablebtn");
    dashbrd = document.getElementById("dashboardbtn");
    table.setAttribute("class","primary-btns");
    dashbrd.setAttribute("class","primary-btns active");
    var sidebar = document.getElementById("leftsidebar");
    var grid = document.getElementById("grid");
    down = document.getElementById("iconchanger");
    var downwards = document.getElementById("iconchange");
    collapseoptions = document.getElementById("collapseoptions");
    var collapsesetting = document.getElementById("profile-setting");

    if( this.collapsed == true){
      collapseoptions.style.display = "flex";
      down.innerHTML = "expand_more";
      this.collapsed = false;
    }
    else{
      collapseoptions.style.display = "none";
      down.innerHTML = "navigate_next";
      this.collapsed = true;
      }
  }

  changeactive():void{
    var table:any;
    var dashbrd:any;
    table = document.getElementById("tablebtn");
    dashbrd = document.getElementById("dashboardbtn");
    table.setAttribute("class","primary-btns active");
    dashbrd.setAttribute("class","primary-btns");    
    var defaultbtn:any = document.getElementById("defaultbtn");
    defaultbtn.setAttribute("class","secondary-btns");
  }
}
