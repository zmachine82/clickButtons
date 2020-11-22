import { PolyphiaVideoComponent } from './polyphia-video/polyphia-video.component';
import { StickFightVideoComponent } from './stick-fight-video/stick-fight-video.component';
import { MovieTheaterComponent } from './movie-theater/movie-theater.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridTestComponent } from './grid-test/grid-test.component';

const routes: Routes = [
  {path: '', component: MovieTheaterComponent},
  {path: 'home', component: HomeComponent },
  {path: 'stickFightingVideo', component: StickFightVideoComponent},
  {path: 'polyphiaVideo', component: PolyphiaVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
