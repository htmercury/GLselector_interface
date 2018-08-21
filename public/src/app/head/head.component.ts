import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
    //   navigator.mediaDevices.getUserMedia({ video: true })
    //     .then(function (stream) {
    //       video.srcObject = stream;
    //     })
    //     .catch(function (err0r) {
    //       console.log("Something went wrong!");
    //     });
    // }
  }

}
