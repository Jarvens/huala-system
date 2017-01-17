import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerSubsidyService {
  constructor(private http: MyHttp) {
  }

  initData(date: string) {
    return this.http.post("/balance/seller-reward",{date:date});
  }
}