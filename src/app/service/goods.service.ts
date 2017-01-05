import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';

@Injectable()
export class GoodsService {
  constructor (private http: MyHttp) {}
  
  getGoodsByCat(data){
    let gUrl = "/goods/h-goods-list";
    return this.http.get(gUrl, data);
  }
}