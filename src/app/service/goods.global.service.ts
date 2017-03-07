import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class GoodsGlobalService {
  constructor(private http: MyHttp) {
  }

  /**
   * 根据店铺id查询商品列表
   * @param id
   * @param page
   * @param key
   * @returns {Observable<Response>}
   */
  getGoodsBySellerId(id: number, page: any, key: string) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    let url = '/goods/goods-list?key=' + key
    return this.http.get(url, {
      page: page.page, size: page.perPage, sellerId: id
    })
      ;
  }
}