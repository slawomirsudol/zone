import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ZoneApiService} from '../shared/services/zone-api.service';
import {Genre, Movie, MovieListState, MovieResult} from '../shared/types/types';
import _ from 'lodash';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ZoneUtilsService} from '../shared/services/zone-utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  movieListState$: Observable<MovieListState>;

  genreList: Genre[] = [];
  selectedGenres: Genre[] = [];

  movieList: Movie[] = [];
  filteredMovieList: Movie[] = [];

  selectedRating = 0;

  // FIXME: in case of more app views, to avoid bugs - 'loadedPages' should be kept in store
  loadedPages = 1;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<MovieListState>,
              private zoneApiService: ZoneApiService,
              private zoneUtilsService: ZoneUtilsService) {
    this.movieListState$ = this.store;
  }

  ngOnInit() {
    // central point for all asynchronous events and data transformations - loading & filtering movie list (based on current filters state)
    this.movieListState$.subscribe((data: any) => {
      const moviesAndGenres: MovieListState = data.moviesAndGenres;
      // FIXME: it should be divided into 2 subscribtions (one for genres and one for movie list... below is ugly workaround
      // code below could be written more functional
      if (!_.isEmpty(moviesAndGenres.pagedMovies) && !_.isEmpty(moviesAndGenres.genres)) {
        this.selectedGenres = moviesAndGenres.selectedGenres;
        this.selectedRating = moviesAndGenres.selectedRating;
        this.movieList = this.zoneUtilsService.extractMoviesFromMovieResults(moviesAndGenres.pagedMovies);

        this.genreList = this.zoneUtilsService.getGenresBasedOnIdList(moviesAndGenres.genres, this.movieList);
        this.movieList = this.zoneUtilsService.addGenreNamesToMovies(this.genreList, this.movieList);

        // filtering & sorting
        this.filteredMovieList = this.zoneUtilsService.filterMoviesBySelectedGenre(this.movieList, this.selectedGenres);
        this.filteredMovieList = this.zoneUtilsService.filterMoviesBySelectedRating(this.filteredMovieList, this.selectedRating);
        this.filteredMovieList = this.zoneUtilsService.sortByPopularity(this.filteredMovieList);
      }
    });
  }

  loadMoreMovies($event) {
    this.zoneApiService.getMoviesPlayingNow(++this.loadedPages);
  }

}
