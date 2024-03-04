import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ManageProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
