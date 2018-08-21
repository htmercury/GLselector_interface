import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  play = false;
  constructor() { }

  ngOnInit() {
    let self = this;
    $('.cam-wrapper').toggle();

    $('#demo').click(function () {
      $('.cam-wrapper').slideToggle(800);
    })

    $(".ui.toggle.button").click(function () {
      $(this).toggleClass('start');
      $(".ui.toggle.button i").toggleClass('play stop');
      if (self.play) {
        video.srcObject = null;
      }
      else {
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
              video.srcObject = stream;
            })
            .catch(function (err0r) {
              console.log("Something went wrong!");
            });
        }
      }
      self.play = !self.play;
    })
    var video:any;
    video = document.querySelector("#videoElement");


  }

}
