import {Component, ChangeDetectorRef, OnInit} from '@angular/core';
import {AppVersionService} from '../../../service/app.version.service';
@Component({
  selector: 'app-component',
  templateUrl: 'app.version.component.html'
})

export class AppVersionComponent implements OnInit {
  constructor(private appVersionService: AppVersionService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getAppVersionList(null);
  }

  /**
   * app版本集合
   * @type {{}}
   */
  appVersionList: any = {};
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}
  /**
   * 模态显示
   * @type {boolean}
   */
  opened: boolean = false;
  /**
   * Toast提示
   * @type {string}
   */
  toastMessage: string = '';
  /**
   * 类型
   * @type {string}
   */
  toastType: string = 'error';
  /**
   * 显示|关闭toast
   * @type {boolean}
   */
  showAlert: boolean = false;
  /**
   * 当前操作对象
   * @type {{}}
   */
  appObj: any = {};

  getAppVersionList(page: any) {
    this.appVersionService.getAppList(page).subscribe(res=> {
      this.appVersionList = res.json();
      console.log(res.json());
    });
  }

  /**
   * 分页方法
   * @param event
   */
  pageChange(event) {

  }

  //打开模态
  open(data) {
    this.opened = !this.opened;
    this.appObj = (<any>Object).assign({}, data);
  }

  /**
   * 关闭模态
   */
  cancel() {
    this.opened = !this.opened;
  }

  /**
   * 保存appVersion版本管理
   */
  saveAppVersion() {
    this.appVersionService.saveAppVersion(this.appObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.toastMessage = '保存成功';
        this.showAlert = !this.showAlert;
        this.toastType = 'success';
      } else {
        this.toastMessage = ret.message;
        this.showAlert = !this.showAlert;
        this.toastType = 'error';
      }
    });
  }

}