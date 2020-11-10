import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color: boolean = false
  background: [
    'green',
    'yellow',
    'blue',
    'purple',
    'orange'
  ]
  backgroundColor: string
  constructor() { }

  ngOnInit(): void {
    debugger
    this.switchBackground();
  }

  switchColor() {
    this.color = !this.color
  }

  switchBackground() {
    let something = this.background[Math.floor(Math.random() * this.background.length)]
    something.toString
    console.log(something)
}


}
