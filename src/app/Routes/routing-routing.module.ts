import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomComponent } from 'src/app/Pages/Welcome/Welcom.component';
import { LoginComponent } from '../Pages/Login/login.component';
import { MasterComponent } from '../Pages/MasterComponent/master.component';
import { RegisterItemComponent } from '../Pages/RegisterItem/register-item.component';


const routes: Routes = [

  { 
    path: '', redirectTo: 'portal', pathMatch: 'full' 
  },
  {
    path: 'portal', component: MasterComponent
  },
  {
    path: 'registerItem', component: RegisterItemComponent
  },
  {
    path: '**', redirectTo: 'portal'
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
