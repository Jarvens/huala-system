import {Component, Input, OnChanges} from '@angular/core';
import {SellerService} from '../../service/seller.service';
@Component({
  selector: 'seller-transfer-account-component',
  templateUrl: './seller.transfer.account.component.html'
})
export class SellerTransferAccountComponent implements OnChanges {


  /**
   * 转账列表对象
   * @type {{}}
   */
  sellerTransferDataList: any = {};
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};

  /**
   * 搜索关键字
   * @type {string}
   */
  key: string = '';

  /**
   * 类型
   * @type {string}
   */
  type: string = 'all';

  @Input() currentSeller: any = {};


  constructor(private sellerService: SellerService) {
  }

  ngOnChanges(changes: any): void {
    let value = changes['currentSeller'];
    if (!value) {
      return;
    }
    if (value.currentValue.id != value.previousValue.id) {
      this.getTransferDataList(this.pageOpts, this.key, this.currentSeller.id, this.type);
    }
  }

  /**
   * 异步搜索事件
   * @param data
   */
  searchByCondition(data: string) {
    this.key = data;
    this.getTransferDataList(this.pageOpts, this.key, this.currentSeller.id, this.type);
  }

  /**
   * 分页事件
   * @param data
   */
  pageChange(data: number) {
    this.pageOpts.page = data;
    this.getTransferDataList(this.pageOpts, this.key, this.currentSeller.id, this.type);
  }

  /**
   * 查询转账提现列表
   * @param page
   * @param key
   */
  getTransferDataList(page: any, key: string, id: number, type: string) {
    this.sellerService.getTransferDataList(page, key, id, type).subscribe(res=> {
      this.sellerTransferDataList = res.json();
    });
  }

  /**
   * 查询按钮
   */
  search() {
    console.log('查询-->',this.type);
    this.getTransferDataList(this.pageOpts, this.key, this.currentSeller.id, this.type);
  }
}