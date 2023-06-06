import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  sideBarOpen = true;

  constructor() { }


  sideBarToggler(e:any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}