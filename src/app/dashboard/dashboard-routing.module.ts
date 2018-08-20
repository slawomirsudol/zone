import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {MovieListResolver} from '../shared/resolvers/movieList.resolver';
import {GenreListResolver} from '../shared/resolvers/genreList.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      movieResult: MovieListResolver,
      genreList: GenreListResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
