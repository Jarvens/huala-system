import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SellerService} from '../../../service/seller.service';
@Component({
  selector: 'seller-list-common-component',
  templateUrl: './seller.list.common.component.html'
})

export class SellerListCommonComponent implements OnInit {
  //商家列表
  sellerList: any = {};
  //分页对象
  pageOpts: any = {total: 0, limit: 3, perPage: 10};
  //显示|隐藏  复选框
  @Input() openCheckBox: boolean = true;
  //显示|隐藏  搜索框选项图标
  @Input() openConditionIcon: boolean = true;
  searchKey: string = '';
  //全部:0   所属人:1
  keyType: string = '0';
  //显示|隐藏  全选
  openSelectAll: boolean = true;
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
}