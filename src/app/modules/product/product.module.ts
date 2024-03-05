import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    CreateProductComponent,
    ViewProductComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ProductRoutingModule,
    CommonModule,
    NgxDropzoneModule
  ]
})
export class ProductModule { }
