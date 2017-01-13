import {Component, OnInit} from '@angular/core';
import {FinanceService} from '../../service/finance.service';
@Component({
  selector: 'finance-list-component',
  templateUrl: './finance.list.component.html'
})

export class FinanceListComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private financeService:FinanceService) {
  }

  //日期对象
  queryDate: string = '';
  //Toast提示
  toastMessage: string = '请选择日期';
  //类型
  toastType: string = 'warning';
  //显示|关闭toast
  showAlert: boolean = false;

  //触发查询操作
  receiveDate(event: any) {
    this.queryDate = event;

  }

  //toast通知
  notifyParamFunction(event) {
    this.showAlert = !this.showAlert;
  }

}