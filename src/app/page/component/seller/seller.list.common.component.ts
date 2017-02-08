import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SellerService} from '../../../service/seller.service';
@Component({
  selector: 'seller-list-common-component',
  templateUrl: './seller.list.common.component.html'
})

export class SellerListCommonComponent implements OnInit {
  //显示|隐藏  复选框
  @Input() openCheckBox: boolean = true;
  //显示|隐藏  搜索框选项图标
  @Input() openConditionIcon: boolean = true;
  //搜索延迟时间  毫秒
  @Input() debounce: number = 2000;
  //商家列表
  sellerList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //搜索关键字
  searchKey: string = '';
  //全部:0   所属人:1
  keyType: string = '0';
  //搜索提示
  placeholder: string = '搜索  ID  名称 手机号';

  ngOnInit(): void {
    this.querySellerList(this.searchKey, this.pageOpts, this.keyType);
  }

  constructor(private sellerService: SellerService) {
  }

  //查询商家列表
  querySellerList(key: string, page: any, keyType: string) {
    this.sellerService.getSellerList(page, key, keyType).subscribe(res=> {
      this.sellerList = res.json();
    });
  }

  //异步查询事件
  searchByCondition(data: string) {
    this.searchKey = data;
    this.querySellerList(this.searchKey, this.pageOpts, this.keyType);
  }

  //行点击事件
  onRowClick(event: any) {

  }

  //分页事件
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.querySellerList(this.searchKey, this.pageOpts, this.keyType);
  }

}