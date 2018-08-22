import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User:object ={name:"", password:""}
  constructor( private _httpService:HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
  }
loginUser(){
  let observable = this._httpService.loginUser(this.User);
  observable.subscribe((data:any) =>{
    console.log(data);
    this.User={name:"", password:""}

  })
}
}
