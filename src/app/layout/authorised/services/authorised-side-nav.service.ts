import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorisedSideNavService {
  hideSideBar: boolean = false;

  constructor() { }

  toggleSideBar(): void {
    this.hideSideBar = !this.hideSideBar;
  }

}
