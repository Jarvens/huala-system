import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerService {

    constructor(private http: MyHttp) {
    }

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