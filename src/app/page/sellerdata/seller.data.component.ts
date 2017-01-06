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
  queryDate: string = '';
  //测试店铺
  testSeller: boolean = true;
  //下线店铺
  outLineSeller: boolean = true;

  constructor(private sellerDataService: SellerDataService) {
  }

  ngOnInit(): void {
    this.getSellerData(this.pageOpts, this.queryDate, this.testSeller, this.outLineSeller);
  }

  //接收时间
  receiveDate(event) {
    this.queryDate = event;
  }

  //查询列表方法
  getSellerData(page: any, date: string, testSeller: boolean, outLineSeller: boolean) {
    this.sellerDataService.getSellerData(page, date, testSeller, outLineSeller).subscribe(res=> {
      this.sellerDataList = res.json();
    });
  }

  //分页查询
  pageChange(event) {
    this.pageOpts.page = event;
    this.getSellerData(this.pageOpts, this.queryDate, this.testSeller, this.outLineSeller);
  }

  //按钮查询
  querySellerDataByBtn() {
    this.getSellerData(this.pageOpts, this.queryDate, this.testSeller, this.outLineSeller);
  }

  //报表导出
  exportExcel() {
    let city = localStorage.getItem("cityForHuala");
    this.sellerDataService.exportExcel(city, this.queryDate, this.testSeller, this.outLineSeller);
  }

}