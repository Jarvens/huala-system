import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class OrderLogService {
  constructor(private http: MyHttp) {
  }

  getOrderLogList(key: string, page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }

  }
}
