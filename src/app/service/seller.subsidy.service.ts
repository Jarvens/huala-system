import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerSubsidyService {
  constructor(private http: MyHttp) {
  }

  getSellerSubsidy(date: string, page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }

  }
}