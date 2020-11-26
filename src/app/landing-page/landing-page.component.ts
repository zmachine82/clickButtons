import { setScreenDimensions } from '../../setScreenParams';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  setScreenDimensions //Welcome Page should extend/adjust when toggling sidenav

  constructor() { }

  ngOnInit(): void {
  }

}
