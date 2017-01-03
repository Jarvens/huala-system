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
  }

  //app版本集合
  appVersionList: any = {};
  //分页对象
  pageOpts: any = {total: 0, limit: 3, perPage: 10}



  //条件搜索
  searchByCondition(event){

  }
}