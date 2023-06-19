import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContentbarComponent } from './contentbar/contentbar.component';
import { TablesComponent } from './tables/tables.component';
import { LoginGuard, LoginGuard2 } from './login.guard';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},  
  {path:"login", component:LoginComponent, canActivate:[LoginGuard2]},
  {path:"register", component:RegisterComponent,canActivate:[LoginGuard2]},
  {path:"dashboard", component:ContentbarComponent, canActivate:[LoginGuard]},
  {path:"table",component:TablesComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
