import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StateManageService } from 'src/app/services/state-manage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private stateManageService: StateManageService,
    private router: Router
  ) {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  onSignOut() {
    this.stateManageService.setLoggedUserData(null);
    this.router.navigate(['/login']);
  }
}
