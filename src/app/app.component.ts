import { Component , OnInit} from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'UIdashboard';

  constructor(public loginService:LoginService){}

  isLogedIn:boolean=false;

  ngOnInit(): void {
    var a= localStorage.getItem("loginflag");    
    this.isLogedIn = (a === "true");
    console.log("localStorage value :" ,this.isLogedIn);
    this.isLogedIn = this.loginService.getflag();
  }

  simplecheck(){
    console.log("Yoo Mic checking.....",this.isLogedIn);
  }

}
