import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SellerService} from '../../../service/seller.service';
@Component({
  selector: 'seller-little-component',
  templateUrl: './seller.little.component.html'
})

export class SellerLittleComponent implements OnInit {

  //商家data
  public sellerDataList: any = {};
  //搜索关键字
  public key: string = '';
  //分页对象
  public pageOpts: any = {page: 1, total: 0, limit: 1, perPage: 10};
  //输出
  @Output() targetSeller = new EventEmitter<any>();

  constructor(private sellerService: SellerService) {
  }

  ngOnInit(): void {
    this.getSellerList(this.pageOpts, this.key);
  }

  //查询商家列表
  getSellerList(page: any, key: string) {
    this.sellerService.getSellerList(page, key).subscribe(res=> {
      this.sellerDataList = res.json();
    });
  }

  //分页事件
  pageChange(data: number) {
    this.pageOpts.page = data;
    this.getSellerList(this.pageOpts, this.key);
  }

  //行点击事件
  onRowClick(data: any) {
    this.targetSeller.emit(data.data);
  }

  //关键字搜索
  searchByCondition(data: any) {
    this.key = data;
    this.getSellerList(this.pageOpts, this.key);
  }
}