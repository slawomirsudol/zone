import { Injectable } from '@angular/core';
import {Genre, Movie, MovieResult} from '../types/types';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ZoneUtilsService {

  constructor() {

  }

  extractMoviesFromMovieResults(pagedMovieResults: MovieResult[]): Movie[] {
    const movies = [];
    if (pagedMovieResults) {
      pagedMovieResults.forEach((movieResult: MovieResult) => {
        movies.push(...movieResult.results);
      });
    }
    return movies;
  }

  extractGenreIdsFromMovies(movies: Movie[]): number[] {
    const genreIds = [];
    movies.forEach((movie: Movie) => {
      genreIds.push(...movie.genre_ids);
    });
    return _.uniq(genreIds);
  }

  getGenresBasedOnIdList(genres: Genre[], movieList: Movie[]): Genre[] {
    const uniqueGenreIdsFromAllLoadedMovies = this.extractGenreIdsFromMovies(movieList);

    return _.filter(genres, (genre) => {
      return _.includes(uniqueGenreIdsFromAllLoadedMovies, genre.id);
    });
  }

  addGenreNamesToMovies(genres: Genre[], movies): Movie[] {
    movies.forEach(movie => {
      movie.genreNames = [];
      const matchedElements = _.filter(genres, (genre) => {
        return _.includes(movie.genre_ids, genre.id);
      });
      movie.genreNames = _.map(matchedElements, matchedElement => matchedElement.name);
    });
    return movies;
  }

  filterMoviesBySelectedGenre(movieList: Movie[], selectedGenres: Genre[]): Movie[] {
    if (!selectedGenres.length) {
      return [...movieList];
    } else {
      const genreIds = _.map(selectedGenres, genre => genre.id);
      return movieList.filter(movie => {
        return _.difference(genreIds, movie.genre_ids).length === 0;
      });
    }
  }

  filterMoviesBySelectedRating(movieList: Movie[], selectedRating: number): Movie[] {
    return movieList.filter(movie => {
      return movie.vote_average >= selectedRating;
    });
  }

  sortByPopularity(movieList: Movie[]) {
    return _.reverse(_.sortBy(movieList, 'popularity'));
  }

}

