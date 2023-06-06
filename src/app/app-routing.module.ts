import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'launchpad',
        loadChildren: () => import('./modules/launchpad/launchpad.module').then(m => m.LaunchpadModule)
      },
      {
        path: 'notice',
        loadChildren: () => import('./modules/notices/notices.module').then(m => m.NoticesModule)
      },
      {
        path: 'knowledge-base',
        loadChildren: () => import('./modules/k-base/k-base.module').then(m => m.KBaseModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('./modules/assets/assets.module').then(m => m.AssetsModule)
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
