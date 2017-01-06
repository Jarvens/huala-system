import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerDataService {
  constructor(private http: MyHttp) {
  }

  //商户统计数据列表
  getSellerData(page: any, date: string, testSeller: boolean, outLineSeller: boolean) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/report/other/seller-data", {
      date: date,
      page: page.page,
      size: page.perPage,
      hasTest: testSeller,
      hasOutLine: outLineSeller
    });
  }
}