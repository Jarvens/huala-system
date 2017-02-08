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

}