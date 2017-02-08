import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
@Component({
  selector: 'article-list-component',
  templateUrl: './article.list.component.html'
})

export class ArticleListComponent implements OnInit {

  //文章目录列表
  public cateGoryArray: Array<any> = [];
  //当前目录id
  public currentCateGoryId: string;
  //文章集合
  public articleListData: any = {};
  //分页对象
  public pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  public placeholder: string = '搜索..文章标题.关键字';
  //搜索关键字
  public key: string;
  //目录创建模态 打开|关闭
  public categoryOpened: boolean = false;
  //文章创建模态 打开|关闭
  public articleOpened: boolean = false;
  //prompt 提示消息
  public promptMessage: string = '';
  //prompt 打开|关闭
  public notificationOpen: boolean = false;
  //toast类型
  public toastType: string = 'success';
  //toast消息
  public toastMessage: string;
  //toast 打开|关闭
  public showAlert: boolean = false;
  //显示 隐藏  *
  public required: boolean = true;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.getCateGoryList(this.currentCateGoryId);
  }

  //根据当前目录id获取目录树
  getCateGoryList(id: string) {
    this.articleService.getArticleListByCategoryId(id).subscribe(res=> {
      this.cateGoryArray = res.json().body;
    });
  }


  //查询子节点目录
  getChildren(node: any) {
    return this.getCateGoryList(node.data.id).map(res=> {
      return res.json().body;
    }).toPromise();
  }


  //初始化参数配置
  treeOptions = {
    getChildren: this.getChildren.bind(this),
    context: this
  }

  //目录点击事件
  getCategoryId(data: any) {
    this.currentCateGoryId = data.data.id;
    this.getArticleList(this.currentCateGoryId, this.pageOpts, this.key);
  }

  //创建目录
  createCategory() {
    this.categoryOpened = !this.categoryOpened;
  }

  //创建文章
  createArticle() {
    this.articleOpened = !this.articleOpened;
  }

  //分页事件
  pageChange(data: number) {
    this.pageOpts.page = data;
    this.getArticleList(this.currentCateGoryId, this.pageOpts, this.key);
  }

  //搜索事件
  searchByCondition(data: string) {
    this.key = data;
    this.getArticleList(this.currentCateGoryId, this.pageOpts, this.key);
  }

  //查询文章
  getArticleList(cateGoryId: string, page: any, key: string) {
    this.articleService.getArticleList(cateGoryId, page, key).subscribe(res=> {
      this.articleListData = res.json();
    });
  }

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确认事件
  confirm() {

  }

  //toast传播事件
  notifyParamFunction(data: boolean) {
    this.showAlert = data;
  }

  //删除按钮点击事件
  delClick() {
    this.promptMessage = '您确定要删除该文章吗?';
    this.notificationOpen = !this.notificationOpen;
  }


  //保存目录
  saveCategory() {
    this.categoryOpened = !this.categoryOpened;
    this.toastFunction('保存成功','success');
  }


  //toast函数
  toastFunction(message: string, toastType: string) {
    this.showAlert = !this.showAlert;
    this.toastMessage = message;
    this.toastType = toastType;
  }

}