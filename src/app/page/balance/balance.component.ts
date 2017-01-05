import {Component, OnInit} from '@angular/core';
import {BalanceService} from '../../service/balance.service';
@Component({
  selector: 'balance-component',
  templateUrl: './balance.component.html'
})

export class BalanceComponent implements OnInit {

  //结算列表对象
  balanceList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}
  //模态分页对象
  modalPageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //模态打开|关闭
  opened: boolean = false;
  //结算详情列表
  balanceDetailList: any = {};
  //结算详情列表查询条件
  detailQueryOpts: any = {};
  header: string = '';
  notificationOpen: boolean = false;

  constructor(private balanceService: BalanceService) {
  }

  ngOnInit(): void {
    this.getBalanceList(null);
  }

  //结算列表
  getBalanceList(page: any) {
    this.balanceService.getBalanceList(page).subscribe(res=> {
      this.balanceList = res.json();
    });
  }

  //分页
  pageChange(event) {
    this.pageOpts.page = event;
    this.getBalanceList(this.pageOpts);
  }

  //结算详情列表
  getBalanceDetail(data: any, balanceType: string, title: string) {
    this.detailQueryOpts.date = data.date;
    this.detailQueryOpts.title = title;
    this.detailQueryOpts.balanceType = balanceType;
    this.header = title;
    this.balanceService.getBalanceDetailList(this.modalPageOpts, data.date, balanceType).subscribe(res=> {
      this.balanceDetailList = res.json();
    });
    this.opened = !this.opened;
  }

  //条件搜索
  searchByCondition(event) {

  }

  //结算详情列表分页
  modalPageChanges(event) {
    this.modalPageOpts.page = event;
    this.balanceService.getBalanceDetailList(this.modalPageOpts, this.detailQueryOpts.date, this.detailQueryOpts.balanceType).subscribe(res=> {
      this.balanceDetailList = res.json();
    });
  }

  //结算操作
  settleMent(data: any) {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt取消
  cancel() {
    this.notificationOpen = !this.notificationOpen;
    console.log("点击了cancel方法");
  }

  //prompt确定
  confirm() {
    this.notificationOpen = !this.notificationOpen;
    console.log("点击了confirm方法");
  }

  //关闭按钮触发
  openChange(event) {
    this.balanceDetailList = {};
  }

}