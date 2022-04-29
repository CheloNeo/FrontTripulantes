import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//hacer peticiones de tipo http al back
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoutingRoutingModule } from './Routes/routing/routing-routing.module';
import { LoginComponent } from './Pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
