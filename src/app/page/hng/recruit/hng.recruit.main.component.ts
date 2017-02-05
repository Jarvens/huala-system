import {Component, OnInit} from '@angular/core';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-recruit-main-component',
  templateUrl: './hng.recruit.main.component.html'
})

export class HngRecruitMainComponent implements OnInit {

  //招聘信息列表对象
  public hngRecruitDataList: any = {};
  //分页对象
  public pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //查询条件对象
  public conditions: any = {};
  //prompt提示信息
  public promptMessage: string = '您却定要删除吗?';
  //打开|关闭 prompt
  public notificationOpen: boolean = false;
  //toast类型
  public toastType: string = 'success';
  //toast提示消息
  public toastMessage: string = '';
  //toast 打开|关闭
  public showAlert: boolean = false;
  //操作对象
  public operaObj: any = {};
  public companyListData: Array<any> = [];
  public jobListData: Array<any> = [];
  placeHolder:string ='搜索  店铺ID..店铺名称';

  constructor(private hngService: HngService) {
  }

  ngOnInit(): void {
    this.querySellerDataByBtn();
    this.hngService.getAllCompany().subscribe(res=> {
      this.companyListData = res.json().body;
    });

    this.hngService.getAllJob().subscribe(res=> {
      this.jobListData = res.json().body;
    });
  }

  //分页事件
  pageChange(event) {
    this.pageOpts.page = event;
  }

  querySellerDataByBtn() {
    this.hngService.getRecruitData(this.pageOpts, this.conditions).subscribe(res=> {
      this.hngRecruitDataList = res.json();
    });
  }

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确定事件
  confirm() {
    this.notificationOpen = !this.notificationOpen;
    this.showAlert = !this.showAlert;
    this.toastMessage = '删除成功';
  }

  //Toast传播事件
  notifyParamFunction(event: boolean) {
    this.notificationOpen = event;
  }

  //导出Excel
  exportExcel() {

  }

  //删除事件
  delClick(data: any) {
    this.operaObj = data;
    this.notificationOpen = !this.notificationOpen;
  }

  //删除数据操作
  confirmDel() {

  }


}