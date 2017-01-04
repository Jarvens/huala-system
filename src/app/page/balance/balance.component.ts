import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
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

  constructor(private balanceService: BalanceService, private cdr: ChangeDetectorRef) {
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

}