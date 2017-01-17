import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerSubsidyService {
  constructor(private http: MyHttp) {
  }

  getSellerSubsidy(date: string) {
    return this.http.get("/balance/seller-reward",{date:date});
  }
}