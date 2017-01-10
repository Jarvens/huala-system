import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class BannerService {
  constructor(private http: MyHttp) {

  }

  //获取banner列表
  getBannerList(page: any, searchKey: string) {
    if (!page) {
      page = {page: 1, perPage: 10}
    }
    let url = "/act/banner-list?pageNum=" + page.page + "&pageSize=" + page.perPage + "&searchKey=" + searchKey;
    return this.http.get(url);
  }
}