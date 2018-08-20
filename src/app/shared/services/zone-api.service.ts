import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Movie, Genre, MovieResult, MovieListState} from '../types/types';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_KEY = '63c761421b069625f98a0c70458294b9';
const BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root'
})
export class ZoneApiService {

  constructor(private apiService: ApiService, private store: Store<MovieListState>) {}

  public getMoviesPlayingNow(page: number = 1): Promise<MovieResult> {
    return this.apiService.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
      .toPromise()
      .then((data) => {
        this.store.dispatch({
          type: 'LOAD_MOVIES',
          payload: <MovieResult[]> data});
        return data.results;
      });

  }

  public getGenres(): Promise<Genre[]> {
    return this.apiService.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .toPromise().then((data) => {
        this.store.dispatch({
          type: 'LOAD_GENRES',
          payload: <Genre[]> data.genres});
        return data.genres;
      });
  }

  public getImageThumbnailUrl(imageKey: string): string {
    return `https://d1cuyjsrcm0gby.cloudfront.net/${imageKey}/thumb-320.jpg`;
  }
}
