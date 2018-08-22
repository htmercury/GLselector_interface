import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { RegistrationComponent } from './registration/registration.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
