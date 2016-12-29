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
  pageOpts: any = {total: 100, limit: 3, perPage: 10, page: 1};
  public orderList: any = [];

  constructor(public orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getOrderList(null);
  }

  getOrderList(page: any): void {
    if (!page) {
      page = {
        page: 1,
        itemsPerPage: 10
      };
    }

    this.orderService.getOrderList(this.orderReq, page).subscribe(res => {
      this.orderList = res.json().rows;
      this.orderList.forEach((r, index) => {
        console.log(r + "|" + index)
        r.rank = index + 1;
      });
      console.log(this.orderList)
    });
  }

  //分页事件
  pageChange(event){

  }
}