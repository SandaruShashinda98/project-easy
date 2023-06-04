import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../k-base.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit{

  noticeList:any = []

  constructor(
    private articleService: ArticlesService
  ){
    this.noticeList.push(
      {
        title: 'test title',
        content: 'test content'
      },
      {
        title: 'test title 2',
        content: 'test content 2'
      }
    )
  }

ngOnInit(): void {
  
}



}
