import { LandingPageComponent } from './landing-page/landing-page.component';
import { AnotherStickFightVideoComponent } from './movie-theater-videos/another-stick-fight-video/another-stick-fight-video.component';
import { BackgroundVideoButtonComponent } from './background-video-button/background-video-button.component';
import { LofiMusicVideoComponent } from './lofi-music-video/lofi-music-video.component';
import { RedPandasVideoComponent } from './movie-theater-videos/red-pandas-video/red-pandas-video.component';
import { BetterStickFightVideoComponent } from './movie-theater-videos/better-stick-fight-video/better-stick-fight-video.component';
import { MythbustersVideoComponent } from './movie-theater-videos/mythbusters-video/mythbusters-video.component';
import { YouCanDoAnythingVideoComponent } from './movie-theater-videos/you-can-do-anything-video/you-can-do-anything-video.component';
import { FullHouseVideoComponent } from './movie-theater-videos/full-house-video/full-house-video.component';
import { DeadpoolBobRossVideoComponent } from './movie-theater-videos/deadpool-bob-ross-video/deadpool-bob-ross-video.component';
import { PolyphiaVideoComponent } from './movie-theater-videos/polyphia-video/polyphia-video.component';
import { StickFightVideoComponent } from './movie-theater-videos/stick-fight-video/stick-fight-video.component';
import { MovieTheaterComponent } from './movie-theater/movie-theater.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridTestComponent } from './grid-test/grid-test.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'movieTheater', component: MovieTheaterComponent},
  {path: 'home', component: HomeComponent },
  {path: 'stickFightingVideo', component: StickFightVideoComponent},
  {path: 'polyphiaVideo', component: PolyphiaVideoComponent},
  {path: 'deadpoolBobRoss', component: DeadpoolBobRossVideoComponent},
  {path: 'fullHouseOfMustaches', component: FullHouseVideoComponent},
  {path: 'youCanDoAnything', component: YouCanDoAnythingVideoComponent},
  {path: 'mythbusters', component: MythbustersVideoComponent},
  {path: 'betterStickFight', component: BetterStickFightVideoComponent},
  {path: 'redPandas', component: RedPandasVideoComponent},
  {path: 'lofiMusic', component: LofiMusicVideoComponent},
  {path: 'backgroundVideo', component: BackgroundVideoButtonComponent},
  {path: 'anotherStickFight', component: AnotherStickFightVideoComponent},
  {path: 'landingPage', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
