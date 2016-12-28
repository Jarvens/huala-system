import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class OrderService {
  constructor (private http: MyHttp) {
  }
  getOrderList(orderReq, page:any){
    let gUrl = "/order/order-list?page=" + page.page + "&size=" + page.itemsPerPage;
    return this.http.get(gUrl, orderReq);
  }
}