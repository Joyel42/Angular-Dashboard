import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentbarComponent } from './contentbar/contentbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { HeaderComponent } from './header/header.component';
import { TablesComponent } from './tables/tables.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentbarComponent,
    LeftbarComponent,
    HeaderComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    RightbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
