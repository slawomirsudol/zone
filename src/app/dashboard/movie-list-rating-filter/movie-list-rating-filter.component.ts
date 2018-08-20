import { Component, OnInit } from '@angular/core';
import {MovieListState} from '../../shared/types/types';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-movie-list-rating-filter',
  templateUrl: './movie-list-rating-filter.component.html',
  styleUrls: ['./movie-list-rating-filter.component.scss']
})
export class MovieListRatingFilterComponent implements OnInit {

  constructor(private store: Store<MovieListState>) { }

  ngOnInit() {
    this.dispatchRatingUpdateAction(3);
  }

  formatLabel(value: number | null) {
    return `${value}`;
  }

  changeRangeFilterSelection($event) {
    this.dispatchRatingUpdateAction($event.value);
  }

  dispatchRatingUpdateAction(value) {
    this.store.dispatch({
      type: 'UPDATE_RATING_FILTER',
      payload: value});
  }

}
