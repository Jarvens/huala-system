import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class BalanceService {
  constructor(private http: MyHttp) {
  }

  //结算列表
  getBalanceList(page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get('/balance/date', {page: page.page, size: page.perPage});
  }

  //结算详情列表
  getBalanceDetailList(page: any, date: string, type: string) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get('/balance/balance-detail', {
      date: date,
      balanceType: type,
      page: page.page,
      pageSize: page.perPage
    });
  }
}