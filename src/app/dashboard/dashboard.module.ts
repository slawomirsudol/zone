import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import {ZoneApiService} from '../shared/services/zone-api.service';
import {ApiService} from '../shared/services/api.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieListGenreFilterComponent } from './movie-list-genre-filter/movie-list-genre-filter.component';
import { MovieListRatingFilterComponent } from './movie-list-rating-filter/movie-list-rating-filter.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSliderModule
  ],
  declarations: [DashboardComponent, MovieListComponent, MovieListItemComponent,
    MovieListGenreFilterComponent, MovieListRatingFilterComponent],
  providers: [ApiService, ZoneApiService]
})
export class DashboardModule { }
