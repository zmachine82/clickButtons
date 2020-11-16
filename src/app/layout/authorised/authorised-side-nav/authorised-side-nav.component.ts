import { AuthorisedSideNavService } from './../services/authorised-side-nav.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

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
  }

}
