import { AuthorisedSideNavService } from './../services/authorised-side-nav.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-authorised-top-nav',
  templateUrl: './authorised-top-nav.component.html',
  styleUrls: ['./authorised-top-nav.component.scss']
})
export class AuthorisedTopNavComponent implements OnInit {

  constructor(public sideNavService: AuthorisedSideNavService) { }

  ngOnInit(): void {
  }

}
