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
  public orderReq: any = {
    keyType: "all",
    orderType: "0",
    orderStatus: "all",
    searchKey: "",
    startTime: "",
    endTime: ""
  }; //订单查询条件;
  public placeholder: string = '这是搜索提示信息'; //搜索提示
  public pageOpts: any = {total: 100, limit: 5, perPage: 10, page: 1}; //分页对象
  public opened: boolean = false; //显示详情的标记位;
  public curOrder: any; //当前订单;
  public orderList: any = [];
  public selectedTab:string = "orderBasic"; //所选tab;
  public orderGoods:any;
  public orderLog:any;
  public sellerObj:any={};
  public showBtn:boolean = false;
  constructor(public orderService: OrderService) {
  }
  
  ngOnInit(): void {
    this.getOrderList(null);
  }
  
  /*
   * @description: Get orders list by page number.
   * @params: Number(pageNum).
   * @modified date: 2016/12/29/.
   */
  getOrderList(pageNum: any): void {
    let pData: any = {
      page: 1,
      itemsPerPage: 10
    };
    
    if (pageNum) {
      pData.page = pageNum;
    }
    
    this.orderService.getOrderList(this.orderReq, pData).subscribe(res => {
      let data = res.json();
      this.orderList = data.rows;
      this.pageOpts = {
        total: data.total > 0 ? data.total : 1,
        limit: 5,
        perPage: 10,
        page: data.page
      };
      this.orderList.forEach((r, index) => {
        r.rank = index + 1;
        r.goodAmount = r.goodAmount / 100;
        r.shippingAmount = r.shippingAmount / 100;
        r.discountAmount = r.discountAmount / 100;
        r.orderAmount = r.orderAmount / 100;
        r.payAmount = r.payAmount / 100;
      });
    });
  }
  
  /*
   * @description: Show order detail.
   * @params: orderInfo.
   * @modified date: 2016/12/30.
   */
  showDetail(orderInfo): void {
    let orderId = orderInfo.id;
    this.opened = true;
    this.curOrder = orderInfo;
    this.selectedTab = "orderBasic";
    this.sellerObj.id = orderInfo.sellerId;
    this.orderService.getOrderGoods(orderId).subscribe(res => {
      let data = res.json();
      if(data.success){
        this.orderGoods = data.body.orderGoods;
      }
    });
    
    this.orderService.getOrderLog(orderId).subscribe(res => {
      let data = res.json();

      this.orderLog = data;
    })
  }
  
  selectScope(event) {
    
  }
  
  searchByCondition(event) {
    
  }

  //导出订单
  exportOrder(){

  }
}