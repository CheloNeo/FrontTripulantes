import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Pages/login/login.component';


const routes: Routes = [

  { 
    path: '', redirectTo: 'welcome', pathMatch: 'full' 
  },
  {
    path: 'welcome', component: LoginComponent
  },
  {
    path: '**', redirectTo: 'welcome'
  }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingRoutingModule { }
