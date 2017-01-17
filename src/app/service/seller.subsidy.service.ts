import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerSubsidyService {
  constructor(private http: MyHttp) {
  }

  initData(date: string) {
    return this.http.post("/balance/seller-reward", {date: date});
  }

  getRewardList(date: string, page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/balance/seller-reward-list", {date: date, page: page.page, size: page.perPage});
  }
}