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
  backgroundColor: string
  randomPic: string
  randomAudioClip: string
  isVisible: boolean = true
  constructor() { }

  ngOnInit(): void {
  }


  vanishButton() {
    this.isVisible = !this.isVisible //Not sure if this is correct
  }

  changePicture() {
    const randomPicArray = [
      './assets/images/owen_wilson/wow.jpg',
      './assets/images/owen_wilson/wow_2.jpg',
      './assets/images/owen_wilson/wow_3.jpg',
      './assets/images/owen_wilson/wow_4.jpg',
      './assets/images/owen_wilson/wow_5.jpg',
      './assets/images/owen_wilson/wow_6.jpg'
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
      'lightgreen'
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
      'lightgreen'
    ];
    this.textColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)]
}

  audioPlay(){

}

  enlarge() {
    //size-button-container ++ height and width &&move position right
  }

  owenWilsonAudio() {
    const randomOwenWilsonAudioArray = [
    './assets/audioClips/owen_wilson_audio/hadThisTheory.mp3',
    './assets/audioClips/owen_wilson_audio/iCareDesperately.mp3',
    './assets/audioClips/owen_wilson_audio/imInHillBillyHell.mp3',
    './assets/audioClips/owen_wilson_audio/threePointFiveYears.mp3'
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



}
