import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NotificationRoutingModule } from './notification-routing.module';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotificationComponent } from './view-notification/view-notification.component';

@NgModule({
  declarations: [
    CreateNotificationComponent,
    ViewNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NotificationModule { }
