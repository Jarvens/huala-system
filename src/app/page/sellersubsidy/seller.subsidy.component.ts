import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'seller-subsidy-component',
  templateUrl: './seller.subsidy.component.html'
})
export class SellerSubsidyComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor() {
  }

  //tips  打开|关闭
  open: boolean = false;
  //奖励数据对象
  rewardList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}

  //初始化奖励数据
  initData() {
  }

  //分页事件
  pageChange(event) {

  }
}