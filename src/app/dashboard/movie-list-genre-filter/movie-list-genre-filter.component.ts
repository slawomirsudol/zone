import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Genre, MovieListState} from '../../shared/types/types';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import _ from 'lodash';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-movie-list-genre-filter',
  templateUrl: './movie-list-genre-filter.component.html',
  styleUrls: ['./movie-list-genre-filter.component.scss']
})
export class MovieListGenreFilterComponent implements OnInit {

  @Input()
  genreList: Genre[];

  @ViewChild('genreInput') genreInput: ElementRef;

  selectedGenres: Genre[] = [];
  filteredGenres: Genre[] = [];
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  genreCtrl = new FormControl();

  constructor(private store: Store<MovieListState>) {
  }

  ngOnInit() {
    this.filteredGenres = this.genreList;
  }

  remove(genre: Genre): void {
    _.remove(this.selectedGenres, {id: genre.id});
    this.filteredGenres.push(genre);
    this.filteredGenres = _.sortBy(this.filteredGenres, 'name');
    this.dispatchGenreUpdateAction();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const foundGenre = this.findGenreByName(event.option.viewValue);
    this.selectedGenres.push(foundGenre);
    _.remove(this.filteredGenres, {id: foundGenre.id});
    this.genreInput.nativeElement.value = '';
    this.genreCtrl.setValue(null);
    this.dispatchGenreUpdateAction();
  }

  dispatchGenreUpdateAction() {
    this.store.dispatch({
      type: 'UPDATE_GENRE_FILTER',
      payload: this.selectedGenres});
  }

  findGenreByName(genreName: string): Genre {
    return _.find(this.genreList, {name: genreName});
  }
}

