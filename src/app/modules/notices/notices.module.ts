import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticesRoutingModule } from './notices-routing.module';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    CreateNoticeComponent
  ],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    CKEditorModule
  ]
})
export class NoticesModule { }
