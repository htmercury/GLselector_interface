import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
newUser:object = {fname:"", lname:"", email:"", password:""};
  constructor( private _httpService:HttpService , private _route: ActivatedRoute ) { }

  ngOnInit() {
  }

  createUser(){
    let observable = this._httpService.createUser(this.newUser)
      observable.subscribe((data:any) =>{
        console.log(data);
        this.newUser = {firstname:"", lastname:"", email:"", password:""}
      })
    
  }
}
