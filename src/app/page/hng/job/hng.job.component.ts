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
  //prompt 打开|关闭
  notificationOpen: boolean = false;
  //prompt 提示信息
  promptMessage: string = '您确定要删除该岗位吗?';
  //操作对象
  operaObj: any = {};

  //条件搜索
  searchByCondition(data: any) {
    this.key = data;
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

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确定事件
  confirm() {
    this.notificationOpen = !this.notificationOpen;

  }

  //删除事件
  deleteFunc(data: any) {
    this.operaObj = data;
    this.notificationOpen = !this.notificationOpen;
  }

  //编辑事件
  editFun(data: any) {
  }
}