import { AuthorisedSideNavService } from './../services/authorised-side-nav.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-authorised-top-nav',
  templateUrl: './authorised-top-nav.component.html',
  styleUrls: ['./authorised-top-nav.component.scss']
})
export class AuthorisedTopNavComponent implements OnInit {
  musicOn: boolean = false
  buttonNavColors = false    //possibly change the top nav background depending on component displaying

  constructor(public sideNavService: AuthorisedSideNavService) { }

  ngOnInit(): void {
  }

  lofiMusic() {
    this.musicOn = !this.musicOn  //Function is in place. Still need to work through the logic.
  }

}
