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
    this.switchBackground();
  }

  switchColor() {
    this.color = !this.color
  }

  switchBackground() {
   this.randomColor = [
      'green',
      'yellow',
      'blue',
      'purple',
      'orange'
    ]
    let something = this.randomColor[Math.floor(Math.random() * this.randomColor.length)]
    this.randomColor = []
    this.randomColor.push(something)
}

  enlarge() {
    //size-button-container ++ height and width &&move position right
  }

}
