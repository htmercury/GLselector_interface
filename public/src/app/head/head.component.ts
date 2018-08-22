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
    $('.content').toggle();

    $('#demo').click(function () {
      $('.content').slideToggle(300);
    })

    $("#cam").click(function () {
      // use MediaDevices API
      // docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
      if (navigator.mediaDevices) {
        // access the web cam
        navigator.mediaDevices.getUserMedia({ video: true })
          // permission granted:
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

        img.src = canvas.toDataURL('image/png');
      }
    })
    let video: any;
    video = document.querySelector("#videoElement");
    let canvas: any;


  }

}
