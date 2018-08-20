import {Genre, MovieListState, MovieResult} from '../types/types';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_GENRES = 'LOAD_GENRES';
export const UPDATE_GENRE_FILTER = 'UPDATE_GENRE_FILTER';
export const UPDATE_RATING_FILTER = 'UPDATE_RATING_FILTER';

export const initialState: MovieListState = {
  pagedMovies: [],
  genres: [],
  selectedGenres: [],
  selectedRating: 0
};

export function updateMovieData(state: MovieListState = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES: {
      const pageNumber: number = action.payload.page;
      let newPages = [];
      if (pageNumber >= state.pagedMovies.length) {
        newPages = [...state.pagedMovies, action.payload];
      } else {
        newPages = [...state.pagedMovies];
        newPages[pageNumber] = action.payload;
      }
      state.pagedMovies = [...newPages];
      return state;
    }
    case LOAD_GENRES: {
      return { ...state, genres: action.payload};
    }
    case UPDATE_GENRE_FILTER: {
      return { ...state, selectedGenres: action.payload};
    }
    case UPDATE_RATING_FILTER: {
      return { ...state, selectedRating: action.payload};
    }
    default: {
      return state;
    }
  }

}
