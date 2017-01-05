import {Component, OnInit} from '@angular/core';
import {SellerDataService} from '../../service/seller.data.service';
@Component({
  selector: 'seller-data-component',
  templateUrl: './seller.data.component.html'
})

export class SellerDataComponent implements OnInit {
  // 商户报表对象
  sellerDataList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}
  //日期对象


  constructor(private sellerDataService: SellerDataService) {
  }

  ngOnInit(): void {
  }

}