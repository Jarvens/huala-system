import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerDataService {
  constructor(private http: MyHttp) {
  }
}