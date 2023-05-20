import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ){}

  addNotice(){
    this.router.navigate(['/notice/create']);
  }

  viewNotice(){
    this.router.navigate(['/notice/view']);
  }
}
