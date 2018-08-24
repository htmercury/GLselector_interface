import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

const routes: Routes = [
  {
    path: '' ,
    component: HeadComponent
  },
  {
    path: 'login',
    component:LoginComponent
},
{
  path:'registration',
  component:RegistrationComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'getstarted',
  component:GetstartedComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
