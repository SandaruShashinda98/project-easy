import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoticeComponent } from './create-notice/create-notice.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateNoticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticesRoutingModule { }
