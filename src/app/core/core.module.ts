import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHeaderComponent} from './app-header/app-header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent]
})
export class CoreModule { }
