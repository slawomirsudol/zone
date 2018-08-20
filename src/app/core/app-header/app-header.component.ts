import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  stateNames = {
    DASHBOARD: '/dashboard',
    LIST_VIEWER: '/list-viewer',
  };


  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(stateName: string) {
    this.router.navigate([stateName]);
  }

  isStateActive(stateName: string): boolean {
    return this.router.isActive(stateName, false);
  }

}
