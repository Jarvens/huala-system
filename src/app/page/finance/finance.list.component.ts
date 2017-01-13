import {Component, OnInit} from '@angular/core';
import {FinanceService} from '../../service/finance.service';
@Component({
  selector: 'finance-list-component',
  templateUrl: './finance.list.component.html',
  styleUrls: ['/finance.list.component.css']
})

export class FinanceListComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private financeService: FinanceService) {
  }

  //日期对象
  queryDate: string = '';
  //Toast提示
  toastMessage: string = '请选择日期';
  //类型
  toastType: string = 'warning';
  //显示|关闭toast
  showAlert: boolean = false;
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}

  //财务列表对象
  financeList: any = {};
  //卡片列表对象
  financeCard: any = {};

  //触发查询操作
  receiveDate(event: any) {
    this.queryDate = event.slice(0, 6);
    this.getSql();

  }

  //toast通知
  notifyParamFunction(event: any) {
    this.showAlert = !this.showAlert;
  }

  //分页事件
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.getSql();
  }

  //查询
  getSql() {
    this.financeService.getSql("finance.getFinanceByMonth", this.queryDate, this.pageOpts).subscribe(res=> {
      let ret = res.json();
      if (ret.rows.length > 0) {
        this.financeCard = ret.rows[0];
      }
    });
    this.financeService.getSql("finance.getFinanceByDay", this.queryDate, null).subscribe(res=> {
      this.financeList = res.json();
    });

  }
}