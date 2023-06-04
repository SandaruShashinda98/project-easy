import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KBaseRoutingModule } from './k-base-routing.module';
import { CreateArticleComponent } from './create-article/create-article.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewArticleComponent } from './view-article/view-article.component';

@NgModule({
  declarations: [
    CreateArticleComponent,
    ViewArticleComponent
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
