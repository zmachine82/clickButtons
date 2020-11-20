import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, HostBinding } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridTestComponent } from './grid-test/grid-test.component';
import { AuthorisedTopNavComponent } from './layout/authorised/authorised-top-nav/authorised-top-nav.component';
import { AuthorisedSideNavComponent } from './layout/authorised/authorised-side-nav/authorised-side-nav.component';
import { MovieTheaterComponent } from './movie-theater/movie-theater.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GridTestComponent,
    AuthorisedTopNavComponent,
    AuthorisedSideNavComponent,
    MovieTheaterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
