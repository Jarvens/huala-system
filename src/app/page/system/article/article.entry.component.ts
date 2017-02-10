import {Component, Input} from '@angular/core';
@Component({
  selector: 'article-entry-component',
  templateUrl: './article.entry.component.html'
})
export class ArticleEntryComponent {
  /**
   * 文章对象
   * @type {{}}
   */
  @Input() articleObj: any = {};
  /**
   * 显示|隐藏 *
   * @type {boolean}
   */
  required: boolean = true;
}