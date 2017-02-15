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
  updateSellerGoods(array: Array<any>) {
    return this.http.post('/seller/updae-goods-list', array);
  }

  /**
   * 获取店铺扩展信息
   * @param id
   * @returns {Observable<Response>}
   */
  getSellerExt(id: number) {
    return this.http.get('/seller/seller-basic-info?sellerId=' + id);
  }

  /**
   * 查询店铺基本信息
   * @param id
   * @returns {Observable<Response>}
   */
  getSellerInfo(id: number) {
    return this.http.get('/seller/seller-info', {sellerId: id});
  }

  /**
   * 获取店铺重复信息
   * @param id
   * @returns {Observable<Response>}
   */
  getRepeat(id: number) {
    return this.http.get('/seller/check-info?sellerId=' + id);
  }

  /**
   * 修改店铺扩展信息
   * @param data
   * @returns {Observable<Response>}
   */
  updateSellerExtInfo(data: any) {
    return this.http.post('/seller/update-seller', data);
  }

  /**
   * 根据店铺id 查询店铺结算信息
   * @param id
   * @returns {Observable<Response>}
   */
  getSellerBalance(id: number) {
    return this.http.get('/seller/seller-amount-count?sellerId=' + id);
  }

  /**
   * 查询店铺结算详情
   * @param page
   * @param id
   * @param type
   * @returns {Observable<Response>}
   */
  getBalanceDataList(page: any, id: number, type: string) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get('/seller/seller-balance-list',
      {page: page.page, size: page.perPage, sellerId: id, keyType: type});
  }

}