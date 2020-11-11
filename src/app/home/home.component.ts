import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color: boolean = false
  randomColor = []
garbageColor = 'brown'
  backgroundColor: string
  constructor() { }

  ngOnInit(): void {
  }

  switchColor() {
    this.color = !this.color
  }

  switchBackground(color: string) {
   this.randomColor = [
      'green',
      'yellow',
      'blue',
      'purple',
      'orange'
    ]
    let something = this.randomColor[Math.floor(Math.random() * this.randomColor.length)]
    color = something
    return color
}

audioPlay(){

}

  enlarge() {
    //size-button-container ++ height and width &&move position right
  }

}
