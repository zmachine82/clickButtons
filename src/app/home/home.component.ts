import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  colorBoolean: boolean = false
  randomColor: string;
  textColor: string;
  backgroundColor: string;
  buttonBackgroundColor: string;
  randomPic: string;
  randomAudioClip: string;
  isVisible: boolean = true;
  size: number = 100;
  sealevel: number = 0

  constructor() { }

  ngOnInit(): void {
  }


  vanishButton() {
    this.isVisible = !this.isVisible
  }

  changePicture() {
    const randomPicArray = [
      './assets/images/owen_wilson/wow.jpg',
      './assets/images/owen_wilson/wow_2.jpg',
      './assets/images/owen_wilson/wow_3.jpg',
      './assets/images/owen_wilson/wow_4.jpg',
      './assets/images/owen_wilson/wow_5.jpg',
      './assets/images/owen_wilson/wow_6.jpg',
      './assets/images/owen_wilson/wow_7.jpg',
      './assets/images/owen_wilson/wow_8.jpg',
      './assets/images/owen_wilson/wow_9.jpg',
      './assets/images/owen_wilson/wow_10.jpg',
      './assets/images/owen_wilson/wow_11.jpg'
    ];
    this.randomPic = randomPicArray[Math.floor(Math.random() * randomPicArray.length)]
  }

  switchBackground() {
   const randomColorArray = [
      'green',
      'yellow',
      'blue',
      'purple',
      'orange',
      'red',
      'pink',
      'lightgreen',
      
    ];
    this.randomColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)]
}
  switchColor() {
   const randomColorArray = [
      'green',
      'yellow',
      'blue',
      'purple',
      'orange',
      'red',
      'pink',
      'lightgreen',
      'lightblue',
      'lightpurple',
      'cyan',
      'magenta',
      'lightorange'
    ];
    this.textColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)]
  }

  switchButtonBackgroundColor() {
    const randomButtonBackgroundColorArray = [
      'green',
      'yellow',
      'blue',
      'purple',
      'orange',
      'red',
      'pink',
      'lightgreen',
      'lightblue',
      'lightpurple',
      'cyan',
      'magenta',
      'lightorange'
    ];
    this.buttonBackgroundColor = randomButtonBackgroundColorArray[Math.floor(Math.random() * randomButtonBackgroundColorArray.length)]
  }

  audioPlay(){

  }

  enlarge() {
    this.size += 10
  }

  owenWilsonAudio() {
    const randomOwenWilsonAudioArray = [
    './assets/audioClips/owen_wilson_audio/hadThisTheory.mp3',
    './assets/audioClips/owen_wilson_audio/iCareDesperately.mp3',
    './assets/audioClips/owen_wilson_audio/imInHillBillyHell.mp3',
    './assets/audioClips/owen_wilson_audio/threePointFiveYears.mp3',
    './assets/audioClips/owen_wilson_audio/emotionalDupree.mp3',
    './assets/audioClips/owen_wilson_audio/heartOfALion.mp3',
    './assets/audioClips/owen_wilson_audio/iWasntLikeEveryOtherKid.mp3',
    './assets/audioClips/owen_wilson_audio/sailingDownUnder.mp3',
    './assets/audioClips/owen_wilson_audio/sandbaggin.mp3',
    './assets/audioClips/owen_wilson_audio/whoYouTryingToGetLocoWith.mp3'
    ]
  this.randomAudioClip = randomOwenWilsonAudioArray[Math.floor(Math.random() * randomOwenWilsonAudioArray.length)]
  this.playAudio()
  }

  playAudio(){
    let audio = new Audio();
    audio.src = this.randomAudioClip;
    audio.load();`1 `
    audio.play();
  }


  fillWithWater() {
    this.sealevel += 200
  }

}
