import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//hacer peticiones de tipo http al back
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoutingRoutingModule } from './Routes/routing-routing.module';
import { WelcomComponent } from './Pages/Welcome/Welcom.component';
import { LoginComponent } from './Pages/Login/login.component';
import { MasterComponent } from './Pages/MasterComponent/master.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomComponent,
    MasterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
