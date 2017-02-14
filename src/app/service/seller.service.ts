import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerService {

  constructor(private http: MyHttp) {
  }

  /**
   * 查询店铺列表
   * @param page
   * @param searchKey
   * @param status
   * @param keyType
   * @returns {Observable<Response>}
   */
  getSellerList(page: any, searchKey: any, status?: string, keyType?: string) {
    if (!page) {
      page = {page: 1, perPage: 10}
    }
    return this.http.get("/seller/seller-list", {
      key: searchKey,
      page: page.page,
      size: page.perPage,
      status: status,
      keyType: keyType
    });
  }

  /**
   * 根据 店铺id 分页查询商品列表
   * @param id
   * @param page
   * @param key
   * @returns {Observable<Response>}
   */
  getSellerGoodsDataList(id: number, page: any, key: string) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get('/seller/query-sellergoods-list',
      {page: page.page, size: page.perPage, sellerId: id, searchKey: key});
  }

  /**
   * 批量删除商品信息
   * @param array
   * @returns {Observable<Response>}
   */
  updateSellerGoods(array:Array<any>){
    return this.http.post('/seller/updae-goods-list',array);
  }

}