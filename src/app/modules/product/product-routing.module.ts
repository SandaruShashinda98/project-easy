import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
const routes: Routes = [
  {
    path: 'create',
    component: CreateProductComponent,
  },
  // {
  //   path: '/view',
  //   component: ManageProfileComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
