import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';
declare var $: any;
declare var AOS: any;


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  play = false;
  src_img = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  newUser:object = {fname:"", lname:"", email:"", password:""};
  constructor( private _httpService:HttpService , private _route: ActivatedRoute ) { }

  ngOnInit() {
    AOS.init();
    let self = this;
      // CAMERA JQUERY 
      $("#cam").click(function () {
        if (navigator.mediaDevices) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
              $(this).toggleClass('start');
              $("#cam i").toggleClass('play stop');
              video.srcObject = stream;
              let take_picture = document.getElementById('take-picture');
              take_picture.addEventListener('click', takeSnapshot);
              if (self.play) {
                stream.getTracks().forEach(track => track.stop());
                video.srcObject = null;
              }
              self.play = !self.play;
            })
            // permission denied:
            .catch(function (error) {
              document.body.textContent = 'Could not access the camera. Error: ' + error.name;
            });
        }
  
        function takeSnapshot() {
          let img: any;
          img = document.getElementById('capture');
          var context;
          var width = video.offsetWidth
            , height = video.offsetHeight;
  
          canvas = canvas || document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
  
          context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, width, height);
  
          self.src_img = canvas.toDataURL('image/png');
          var str= self.src_img;
          var newstr = str.substring(22);
          console.log(newstr);
        }
      })
      
      let video: any;
      video = document.querySelector("#videoElement");
      let canvas: any;
  
      // END CAMERA JQUERY 

      var section = 0;
    
      $('.next1').on('click', function(ev) {
    
        ev.preventDefault();
    
        $('#account').animate('slow', function() {
    
          if (section > 0) {
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
          section++;
    
        });
    
      });
    
      $('.prev1').on('click', function(ev) {
    
        ev.preventDefault();
        $('#accountS').removeClass('disabled');
        $('#socialP').addClass('disabled');
    
        $('#social').animate('slow', function() {
    
          $('body').css('background-color', '#300032');
          $('#social').transition('hide');
          $("#account").transition('fly right');
    
        });
    
      });
    
      $('.prev2').on('click', function(ev) {
    
        ev.preventDefault();
        $('#details').addClass('disabled');
        $('#socialP').removeClass('disabled');
    
        $('#personal').animate('slow', function() {
    
          $('body').css('background-color', '#06000a');
          $('#personal').transition('hide');
    
          $('#social').transition('fly right');
        });
    
      });
    
      $('.submit').on('click', function(ev) {
        ev.preventDefault();
        $('#personal').stop();
      });
    ;
    $('.ui.form')
      .form({
        fields: {
          name: {
            identifier: 'name',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your name'
              }
            ] 
          },
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
                prompt: 'Please create a password'
              }
            ]
          }
        }
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
