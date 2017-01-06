import {Component,OnInit} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
@Component({
  selector:'article-list-component',
  templateUrl:'./article.list.component.html'
})

export class ArticleListComponent implements OnInit{
  constructor(private articleService:ArticleService ){}
  ngOnInit(): void {
  }

}