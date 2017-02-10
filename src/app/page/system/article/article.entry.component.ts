import {Component, Input} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
@Component({
  selector: 'article-entry-component',
  templateUrl: './article.entry.component.html'
})
export class ArticleEntryComponent {

  constructor(private articleService: ArticleService) {
  }

  /**
   * 文章对象
   * @type {{}}
   */
  @Input() articleObj: any = {};

  /**
   * 目录对象
   * @type {{}}
   */
  @Input() cateObj: any = {};

  /**
   * 显示|隐藏 *
   * @type {boolean}
   */
  required: boolean = true;

  /**
   * toast类型
   * @type {string}
   */
  toastType: string = 'success';

  /**
   * toast提示消息
   * @type {string}
   */
  toastMessage: string = '';

  /**
   * 打开 |关闭 toast
   * @type {boolean}
   */
  showAlert: boolean = false;

  /**
   * 保存文章
   */
  saveArticle() {
    this.articleObj.cateId = this.cateObj.id;
    this.articleService.saveArticle(this.articleObj).subscribe(res=> {
      let result = res.json();
      if (result.success) {
        this.toastFunction('发布成功', 'success');
      } else {
        this.toastFunction(result.message, 'error');
      }
    });
  }

  /**
   * Toast传播事件
   * @param data
   */
  notifyParamFunction(data: booean) {
    this.showAlert = data;
  }

  /**
   * toast函数
   * @param message
   * @param toastType
   */
  toastFunction(message: string, toastType: string) {
    this.showAlert = !this.showAlert;
    this.toastMessage = message;
    this.toastType = toastType;
  }

}