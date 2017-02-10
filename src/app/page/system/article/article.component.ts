import {Component, OnChanges} from '@angular/core';
@Component({
  selector: 'article-component',
  templateUrl: './article.component.html'
})

export class ArticleComponent {

  /**
   * tab 当前选择id
   * @type {string}
   */
  selected: string = 'list';

  /**
   * 当前文章对象
   * @type {{}}
   */
  articleObj: any;

  /**
   * 赋值
   * @param data
   */
  copyObj(data: any) {
    this.selected = 'entry';
    this.articleObj = data;
  }

  /**
   * 手动触发 切换tab 选项
   * @param data
   */
  change(data: any) {
    this.articleObj = {};
  }

}