import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sideBarOpen = true;
  drawerWidth: string = '12vw'; // Default width for non-mobile screens

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.drawerWidth = window.innerWidth <= 600 ? '50vw' : '12vw';
  }

  sideBarToggler(e: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
