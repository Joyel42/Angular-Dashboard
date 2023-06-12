import { Component , OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { Route } from '@angular/router';

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
    this.isLogedIn = this.loginService.getflag();
    if (this.isLogedIn == true){
    }
    
  }

  simplecheck(){
    console.log(this.isLogedIn);
  }

}
