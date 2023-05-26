import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
    {
        path: 'create', 
        component: CreateArticleComponent
    },
    {
        path: 'view',
        component: ViewArticleComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KBaseRoutingModule {}
