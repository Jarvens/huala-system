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
  open: boolean = false;
  //店铺类型 测试店铺|下线店铺
  items: Array<any> = [{value: '测试店铺', name: '测试店铺'}, {value: '下线店铺', name: '下线店铺'}];
  //是否允许下拉列表多选
  multiple: boolean = true;
  //select下拉框 打开|关闭
  multipleOpen: boolean = false;
  pick: any = [];

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
    let city = localStorage.getItem("hualaCity");
    this.sellerDataService.exportExcel(city, this.queryDate, this.testSeller, this.outLineSeller);
  }

  //下拉选择框-> 轮询
  get pickLabel() {
    return this.pick && this.pick.length ? `${this.pick.length}种类型` : '请选择';
  }


}