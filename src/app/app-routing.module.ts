import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: 'launchpad',
        loadChildren: () =>
          import('./modules/launchpad/launchpad.module').then(
            (m) => m.LaunchpadModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./modules/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
