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

  constructor(private balanceService: BalanceService) {
  }

  ngOnInit(): void {
    this.getBalanceList(null);
  }

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

}