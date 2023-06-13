import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContentbarComponent } from './contentbar/contentbar.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"dashboard", component:ContentbarComponent},
  {path:"", component:ContentbarComponent},
  {path:"table",component:TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
