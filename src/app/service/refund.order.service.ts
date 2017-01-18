import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class RefundOrderService {
  constructor(private http: MyHttp) {
  }

  getOrderList(key: string, page: any) {

  }
}