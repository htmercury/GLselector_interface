import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

declare var $:any;
declare var AOS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User:object ={name:"", password:""}
  constructor( private _httpService:HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    AOS.init();
    $('.ui.form')
      .form({
        fields: {
          email: {
            identifier: 'email',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your email'
              }
            ] 
          },
          password:{
            identifier:'password',
            rules: [
              {
                type:'empty',
                prompt: 'Please enter your password'
              }
            ]
          }
        }
    });
  }
loginUser(){
  let observable = this._httpService.loginUser(this.User);
  observable.subscribe((data:any) =>{
    console.log(data);
    // this._route = DashboardComponent;
    this.User={name:"", password:""}

  })
}
}
