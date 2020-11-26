import { AuthorisedSideNavService } from './../services/authorised-side-nav.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { setScreenDimensions } from '../../../../setScreenParams';

@Component({
  selector: 'app-authorised-side-nav',
  templateUrl: './authorised-side-nav.component.html',
  styleUrls: ['./authorised-side-nav.component.scss']
})
export class AuthorisedSideNavComponent implements OnInit {
  hideSideNav: boolean = false
  hideToggleButton: boolean = false

  constructor(public sideNavService: AuthorisedSideNavService) { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
    this.hideToggleButton = !this.hideToggleButton;
    //change router container size on click, this might be easier and should work across all components

    setScreenDimensions(this.hideSideNav);
  }
}

