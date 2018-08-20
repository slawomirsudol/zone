import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from './services/api.service';
import {ZoneApiService} from './services/zone-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MovieListResolver} from './resolvers/movieList.resolver';
import {ZoneUtilsService} from './services/zone-utils.service';
import {RouterModule} from '@angular/router';
import {GenreListResolver} from './resolvers/genreList.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiService,
    ZoneApiService,
    ZoneUtilsService,
    HttpClient,
    RouterModule,
    MovieListResolver,
    GenreListResolver
  ]
})
export class SharedModule { }
