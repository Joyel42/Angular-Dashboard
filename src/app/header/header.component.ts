import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isSidebarVisible:boolean = false;
  settingsopened:boolean = false;

  collapsesidebar():void{
    var sidebar:any;
    var grid:any;

    grid = document.getElementById("grid");
    sidebar = document.getElementById("leftsidebar");

    if (this.isSidebarVisible == false) {
      sidebar.style.display = "none";
      grid.style.gridTemplateColumns = "0 auto 12rem ";
      this.isSidebarVisible = true;
    } else {
      sidebar.style.display = "flex";
      grid.style.gridTemplateColumns = "12rem auto 12rem ";
      this.isSidebarVisible = false;
    }
  }

  settings():void{
    var collapsesetting:any;
    var downwards :any;

    downwards = document.getElementById("iconchange");
    collapsesetting = document.getElementById("profile-setting");
    if(this.settingsopened == false){
      collapsesetting.style.display = "flex";
      downwards.innerHTML = "expand_less";
      this.settingsopened = true;
    }
    else{
      collapsesetting.style.display = "none";
      downwards.innerHTML = "expand_more";
      this.settingsopened = false;
    }
  }
}
