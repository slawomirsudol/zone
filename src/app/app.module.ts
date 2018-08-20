import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {updateMovieData} from './shared/store/movie.reducer';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {GestureConfig} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({moviesAndGenres: updateMovieData}),
    SharedModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
