
interface MovieListState {
  pagedMovies: MovieResult[];
  genres: Genre[];
  selectedGenres: Genre[];
  selectedRating: number;
}

interface Movie {
  voteCount: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  genreNames: string[];
  backdrop_path: string;
  adult: false;
  overview: string;
  release_date: string;
}

interface MovieResult {
  results: Movie[];
  dates: any;
  page: number;
  total_pages: number;
  total_results: number;
}

interface Genre {
  id: number;
  name: string;
}

export { Movie, Genre, MovieResult, MovieListState };

