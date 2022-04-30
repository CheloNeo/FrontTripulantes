import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//hacer peticiones de tipo http al back
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoutingRoutingModule } from './Routes/routing-routing.module';
import { WelcomComponent } from './Pages/Welcome/Welcom.component';
import { MasterComponent } from './Pages/MasterComponent/master.component';
import { RegisterItemComponent } from './Pages/RegisterItem/register-item.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    MasterComponent,
    RegisterItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingRoutingModule,
    AlifeFileToBase64Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
