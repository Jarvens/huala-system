import {Component, OnInit} from '@angular/core';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-job-component',
  templateUrl: './hng.job.component.html'
})

export class HngJobComponent implements OnInit {
  constructor(private hngService: HngService) {
  }

  ngOnInit(): void {
    this.queryJobList(this.key, this.pageOpts);
  }

  //岗位列表
  jdbList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //搜索条件
  key: string = '';
  placeholder: string = '搜索..岗位名称..联系人..电话';

  //条件搜索
  searchByCondition(data: any) {
    this.key = date;
    this.queryJobList(this.key, this.pageOpts);
  }

  //查询岗位列表
  queryJobList(key: string, page: any) {
    this.hngService.getJobList(key, page).subscribe(res=> {
      this.jdbList = res.json();
    });
  }

  //分页
  pageChange(data: any) {
    this.pageOpts.page = data;
    this.queryJobList(this.key, this.pageOpts);
  }
}