import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Genre, MovieListState, MovieResult} from '../types/types';
import {ZoneApiService} from '../services/zone-api.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';

@Injectable()
export class GenreListResolver implements Resolve<Genre[]> {
  constructor(private zoneApiService: ZoneApiService) {}

  resolve (route: ActivatedRouteSnapshot): Promise<Genre[]> {
    return this.zoneApiService.getGenres();
  }
}
