import {Component, Input, OnChanges} from '@angular/core';
import {SellerService} from '../../service/seller.service';
@Component({
  selector: 'seller-balance-component',
  templateUrl: './seller.balance.component.html'
})

export class SellerBalanceComponent implements OnChanges {
  /**
   * 当前店铺
   * @type {{}}
   */
  @Input() currentSeller: any = {};

  /**
   * 结算信息集合
   * @type {Array}
   */
  balanceData: any = {};

  /**
   * 结算详情
   * @type {{}}
   */
  balanceDataList: any = {};

  /**
   * 分页
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};

  key: string = '';

  constructor(private sellerService: SellerService) {
  }

  /**
   * 监听当前店铺变化信息
   * @param changes
   */
  ngOnChanges(changes: any): void {
    let value: any = changes['currentSeller'];
    if (!value) {
      return;
    }
    if (value.currentValue.id != value.previousValue.id) {
      let id = this.currentSeller.id;
      this.getSellerBalanceData(id);
      this.getSellerBalanceDataList(this.pageOpts, id, this.key);
    }
  }

  /**
   * 根据店铺id  查询店铺结算信息
   * @param id
   */
  getSellerBalanceData(id: number) {
    this.sellerService.getSellerBalance(id).subscribe(res=> {
      this.balanceData = res.json().body;
    });
  }

  /**
   * 根据店铺id 查询  结算列表详情
   * @param page
   * @param id
   * @param type
   */
  getSellerBalanceDataList(page: any, id: number, type: string) {
    this.sellerService.getBalanceDataList(page, id, type).subscribe(res=> {
      this.balanceDataList = res.json();
    });
  }

  /**
   * 发送结算信息
   * @param data
   */
  sendBalance(data:any){

  }

}