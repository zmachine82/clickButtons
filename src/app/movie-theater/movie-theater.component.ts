import { Component, OnInit } from '@angular/core';
//import {YouTubePlayer} from '@angular/youtube-player';
//import {YouTubePlayer} from "../../../node_modules/@types/youtube-player";

@Component({
  selector: 'app-movie-theater',
  templateUrl: './movie-theater.component.html',
  styleUrls: ['./movie-theater.component.scss']
})
export class MovieTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {
    
  }

  // playVid(): void {
  //   let player;

  //   player = new YouTubePlayer('video-player');

  //   // 'loadVideoById' is queued until the player is ready to receive API calls.
  //   player.loadVideoById('PCtr04cnx5A');

  //   // 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
  //   player.playVideo();

  //   // 'stopVideo' is queued after 'playVideo'.
  //   player
  //       .stopVideo()
  //       .then(() => {
  //           // Every function returns a promise that is resolved after the target function has been executed.
  //       });

      //}

}
