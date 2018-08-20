import {Component, Input, OnInit} from '@angular/core';
import {Genre, Movie} from '../../shared/types/types';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input()
  movieList: Movie[];

  constructor() {
  }

  ngOnInit() {

  }

}
