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
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //财务列表对象
  financeList: any = {};
  //卡片列表对象
  financeCard: any = {};
  //收入详情 打开|关闭
  incomeOpen: boolean = false;
  //支出详情 打开|关闭
  expenditureOpen: boolean = false;
  //收入详情列表
  incomeList: any = {};
  //支出详情列表
  expenditureList: any = {};
  //收入详情分页对象
  incomePageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //支出详情分页对象
  expenditurePageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //格式化时间
  _date_formate: string = 'yyyymmdd';

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
    this.financeService.getSql("finance.getFinanceByDay", this.queryDate, this.pageOpts).subscribe(res=> {
      this.financeList = res.json();
    });

  }

  //收入详情
  incomeDetail(date: string) {
    this.incomeOpen = !this.incomeOpen;
    this.financeService.getSql("finance.getFinanceOrder", date, this.incomePageOpts).subscribe(res=> {
      this.incomeList = res.json();
    });
  }

  //支出详情
  expenditureDetail(date: string) {
    this.expenditureOpen = !this.expenditureOpen;
    this.financeService.getSql("finance.getFinancePay", date, this.expenditurePageOpts).subscribe(res=> {
      this.expenditureList = res.json();
    });
  }


}