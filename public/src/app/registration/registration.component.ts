import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
newUser:object = {fname:"", lname:"", email:"", password:""};
  constructor( private _httpService:HttpService , private _route: ActivatedRoute ) { }

  ngOnInit() {
    $(document).ready(function() {

      var ct = 0;
    
      $('.next1').on('click', function(e) {
    
        e.preventDefault();
    
        $('#account').animate('slow', function() {
    
          if (ct > 0) {
            $('#account').removeClass('transition visible');
            $('#account').addClass('transition hidden');
    
          }
          $('#account').css('display', 'none');
    
          $('#accountS').addClass('disabled');
          $('#socialP').removeClass('disabled');
          $("#social").transition('fly right');
          $('body').css('background-color', '#06000a');
          $('#social button').removeClass('inverted violet');
          $('#social button').addClass('inverted blue');
          ct++;
    
        });
    
      });
    
      $('.prev1').on('click', function(e) {
    
        e.preventDefault();
        $('#accountS').removeClass('disabled');
        $('#socialP').addClass('disabled');
    
        $('#social').animate('slow', function() {
    
          $('body').css('background-color', '#300032');
          $('#social').transition('hide');
          $("#account").transition('fly right');
    
        });
    
      });
    
      $('.prev2').on('click', function(m) {
    
        m.preventDefault();
        $('#details').addClass('disabled');
        $('#socialP').removeClass('disabled');
    
        $('#personal').animate('slow', function() {
    
          $('body').css('background-color', '#06000a');
          $('#personal').transition('hide');
    
          $('#social').transition('fly right');
        });
    
      });
    
      $('.submit').on('click', function(p) {
        p.preventDefault();
        $('#personal').stop();
      });
    
    });
    
  }

  createUser(){
    let observable = this._httpService.createUser(this.newUser)
      observable.subscribe((data:any) =>{
        console.log(data);
        this.newUser = {firstname:"", lastname:"", email:"", password:""}
      })
    
  }

  //jQuery time

}
