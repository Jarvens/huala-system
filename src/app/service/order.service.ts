import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class OrderService {
  constructor (private http: MyHttp) {
  }

  /**
   * 查询订单列表
   * @param orderReq
   * @param page
   * @returns {Observable<Response>}
   */
  getOrderList(orderReq, page:any){
    let gUrl = "/order/order-list?page=" + page.page + "&size=" + page.itemsPerPage;
    return this.http.get(gUrl, orderReq);
  }

  /*
   * @Description: Get order goods by order id;
   * @Date: 2017-02-08;
   */
  getOrderGoods(orderId){
    let gUrl = "/order/order-goods-list?orderId=" + orderId;

    return this.http.get(gUrl);
  }

  /*
   * @Description: Get order log by order id;
   * @Date: 2017-02-09;
   */
  getOrderLog(orderId){
    let gUrl = "/order/order-log-list?orderId=" + orderId;

    return this.http.get(gUrl);
  }
}