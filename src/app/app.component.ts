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

  addArticle(){
    this.router.navigate(['/knowledge-base/create']);
  }

  viewArticle(){
    this.router.navigate(['/knowledge-base/view']);
  }
  addNotification(){
    this.router.navigate(['/notification/create']);
  }

  viewNotification(){
    this.router.navigate(['/notification/view']);
  }
  addAssets(){
    this.router.navigate(['/assets/create']);
  }

  viewAssets(){
    this.router.navigate(['/assets/view']);
  }
}
