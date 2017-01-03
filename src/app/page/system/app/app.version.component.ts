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

  //app版本集合
  appVersionList: any = {};
  //分页对象
  pageOpts: any = {total: 0, limit: 3, perPage: 10}
  //模态显示
  opened: boolean = false;

  //appObj
  appObj: any = {};

  getAppVersionList(page: any) {
    this.appVersionService.getAppList(page).subscribe(res=> {
      this.appVersionList = res.json();
      console.log(res.json());
    });
  }

  //分页方法
  pageChange(event) {

  }

  //打开模态
  open(data) {
    this.opened = !this.opened;
    this.appObj = (<any>Object).assign({}, data);
  }

  //关闭模态
  cancel() {
    this.opened = !this.opened;
  }

}