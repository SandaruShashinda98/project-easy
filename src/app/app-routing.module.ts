import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notice',
    loadChildren: () => import('./modules/notices/notices.module').then(m => m.NoticesModule)
  },
  {
    path: 'knowledge-base',
    loadChildren: () => import('./modules/k-base/k-base.module').then(m => m.KBaseModule)
  },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
