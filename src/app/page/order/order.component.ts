/**
 * Created by yhm on 16/12/28.
 */
import {Component, OnInit} from "@angular/core";
import {OrderService} from "../../service/order.service";
@Component({
  moduleId: "OrderManage",
  selector: "order",
  templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
  //订单查询条件;
  public orderReq: any = {
    keyType: "all",
    orderType: "0",
    orderStatus: "all",
    searchKey: "",
    startTime: "",
    endTime: ""
  };
  //搜索提示
  placeholder: string = '这是搜索提示信息';
  //分页对象
  pageOpts: any = {total: 100, limit: 5, perPage: 10, page: 1};
  public orderList: any = [];

  constructor(public orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getOrderList(null);
  }

  getOrderList(pageNum: any): void {
    let pData:any = {
      page: 1,
      itemsPerPage: 10
    };

    if(pageNum){
      pData.page = pageNum;
    }

    this.orderService.getOrderList(this.orderReq, pData).subscribe(res => {
      let data = res.json();
      this.orderList = data.rows;
      this.pageOpts = {
        total: data.total,
        limit: 5,
        perPage: 10,
        page: data.page
      };
      this.orderList.forEach((r, index) => {
        r.rank = index + 1;
        r.goodAmount = r.goodAmount/100;
        r.shippingAmount = r.shippingAmount/100;
        r.discountAmount = r.discountAmount/100;
        r.orderAmount = r.orderAmount/100;
        r.payAmount = r.payAmount/100;
      });
    });
  }
}