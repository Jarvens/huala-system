import {Component, OnInit} from '@angular/core';
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
  public pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};

  constructor(private sellerService: SellerService) {
  }

  ngOnInit(): void {
  }

  //查询商家列表
  getSellerList(page: any, key: string) {
    this.sellerService.getSellerList(page, key).subscribe(res=> {
      this.sellerDataList = res.json();
    });
  }
}