import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KBaseRoutingModule } from './k-base-routing.module';
import { CreateArticleComponent } from './create-article/create-article.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    KBaseRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class KBaseModule { }
