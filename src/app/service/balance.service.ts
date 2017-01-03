import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class BalanceService {
  constructor(private http: MyHttp) {
  }

  getBalanceList(page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get('/balance/date', {page: page.page, size: page.perPage});
  }
}