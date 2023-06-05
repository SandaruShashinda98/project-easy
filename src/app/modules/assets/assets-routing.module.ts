import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssestComponent } from './add-assets/add-assets.component';
import { ViewAssetsComponent } from './view-assets/view-assets.component';

const routes: Routes = [
  {
    path: 'create',
    component: AddAssestComponent,
  },
  {
    path: 'view',
    component: ViewAssetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetsRoutingModule {}
