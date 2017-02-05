import {Component, OnInit} from '@angular/core';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-recruit-basic-component',
  templateUrl: './hng.recruit.basic.component.html'
})

export class HngRecruitBasicComponent implements OnInit {
  public wriInfoStatus: string = 'doing';
  public relativeSellerInfoStatus: string = 'will';
  public wriPublishTimeStatus: string = 'will';
  //显示|隐藏  *
  public required: boolean = true;
  //招聘模板id
  public recruitId: string = '';
  //公司
  public companyListData: Array<any> = [];
  //岗位
  public jobListData: Array<any> = [];
  //操作对象
  public operaObj: any = {};
  //toast类型
  public toastType: string = 'success';
  //toast消息
  public toastMessage: string = '';
  //打开|关闭 toast
  public showAlert: boolean = false;

  ngOnInit(): void {
    this.hngService.getAllJob().subscribe(res=> {
      this.jobListData = res.json().body;
    });
    this.hngService.getAllCompany().subscribe(res=> {
      this.companyListData = res.json().body;
    });
  }

  constructor(private hngService: HngService) {
  }

  //保存数据
  saveData() {
    console.log(this.operaObj);
  }

  //toast传播事件
  notifyParamFunction(event: boolean) {
    this.showAlert = event;
  }


}