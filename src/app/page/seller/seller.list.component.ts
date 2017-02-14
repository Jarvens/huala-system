import {Component, OnInit, Input} from '@angular/core';
import {SellerService} from '../../service/seller.service';
@Component({
  selector: 'seller-list-component',
  templateUrl: './seller.list.component.html'
})

export class SellerListComponent implements OnInit {
  /**
   * 显示|隐藏  复选框
   * @type {boolean}
   */
  @Input() openCheckBox: boolean = true;
  /**
   * 显示|隐藏  搜索框选项图标
   * @type {boolean}
   */
  @Input() openConditionIcon: boolean = true;
  /**
   * 搜索延迟时间  毫秒
   * @type {number}
   */
  @Input() debounce: number = 2000;
  /**
   * 商家列表
   * @type {{}}
   */
  sellerList: any = {};
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  /**
   * 搜索关键字
   * @type {string}
   */
  searchKey: string = '';
  /**
   * 全部:0   所属人:1
   * @type {string}
   */
  keyType: string = '0';
  /**
   * 搜索提示
   * @type {string}
   */
  placeholder: string = '搜索  ID  名称 手机号';

  ngOnInit(): void {
    this.querySellerList(this.searchKey, this.pageOpts, this.keyType);
  }

  constructor(private sellerService: SellerService) {
  }

  /**
   * 查询商家列表
   * @param key
   * @param page
   * @param keyType
   */
  querySellerList(key: string, page: any, keyType: string) {
    this.sellerService.getSellerList(page, key, keyType).subscribe(res=> {
      this.sellerList = res.json();
    });
  }

  /**
   * 异步查询事件
   * @param data
   */
  searchByCondition(data: string) {
    this.searchKey = data;
    this.querySellerList(this.searchKey, this.pageOpts, this.keyType);
  }

  /**
   * 行点击事件
   * @param event
   */
  onRowClick(event: any) {

  }

  /**
   * 分页事件
   * @param event
   */
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.querySellerList(this.searchKey, this.pageOpts, this.keyType);
  }

  operator(){

  }

}