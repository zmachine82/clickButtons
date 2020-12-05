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
  size: number = 115;
  sealevel: number = 0;
  currentJoke: string;

  constructor() { }

  ngOnInit(): void {
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
      'lightblue',
      'lightpurple',
      'cyan',
      'magenta',
      'lightorange'
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

  enlarge() {
    this.size += 10
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

  playBackgroundVideo() { //play virus video on background page

  }

  vanishButton() {
    this.isVisible = !this.isVisible
  }

  fillWithWater() {
    this.sealevel += 200
  }

  bringMeAJoke() {
    const randomJokeArray=[
      "Don't use beef stew as a computer password. It's not stroganoff.",
      "Why are iPhone chargers not called Apple Juice?!",
      "How does a computer get drunk? A. It takes screenshots.",
      "When life gives you melons, you might be dyslexic.",
      "I don’t suffer from insanity—I enjoy every minute of it.",
      "Atheism is a non-prophet organization.",
      "I didn’t think orthopedic shoes would help, but I stand corrected.",
      "If attacked by a mob of clowns, go for the juggler.",
      "The man who invented Velcro has died. RIP."
    ]
    this.currentJoke = randomJokeArray[Math.floor(Math.random() * randomJokeArray.length)]
  }

}
