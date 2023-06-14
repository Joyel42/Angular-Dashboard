import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  name:string = "";

  ngOnInit(): void {
    var a = window.localStorage.getItem("jwt");
    var b = JSON.parse(a);
    this.name = b.emp_name;
    document.getElementById("sidebarbtn").setAttribute("title","Hide Sidebar");
  }

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
      document.getElementById("sidebarbtn").removeAttribute("title");
      document.getElementById("sidebarbtn").setAttribute("title","Show Sidebar");
    } else {
      sidebar.style.display = "flex";
      grid.style.gridTemplateColumns = "12rem auto 12rem ";
      this.isSidebarVisible = false;
      document.getElementById("sidebarbtn").removeAttribute("title");
      document.getElementById("sidebarbtn").setAttribute("title","Hide Sidebar");
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
