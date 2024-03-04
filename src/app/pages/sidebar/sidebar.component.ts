import { Component, OnInit } from '@angular/core';
import { StateManageService } from 'src/app/services/state-manage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  name = '';
  email = '';
  permissionType = '';
  constructor(private stateManageService: StateManageService) {}

  ngOnInit(): void {
    this.stateManageService.loggedUserData$.subscribe({
      next: (res: any) => {
        console.log(res);
        this.permissionType = res.permissionType;
        this.name = res.name;
        this.email = res.email;
      },
    });
  }
}
