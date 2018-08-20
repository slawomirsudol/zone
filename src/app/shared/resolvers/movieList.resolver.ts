import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Movie, MovieListState, MovieResult} from '../types/types';
import {ZoneApiService} from '../services/zone-api.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Injectable()
export class MovieListResolver implements Resolve<MovieResult> {
  constructor(private zoneApiService: ZoneApiService, private store: Store<MovieListState>) {}

  resolve (route: ActivatedRouteSnapshot): Promise<MovieResult> {
    return this.zoneApiService.getMoviesPlayingNow();
  }
}
