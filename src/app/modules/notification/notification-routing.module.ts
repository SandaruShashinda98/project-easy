import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateNotificationComponent,
  },
  {
    path: 'view',
    component: ViewNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationRoutingModule {}
