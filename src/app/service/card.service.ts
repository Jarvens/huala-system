import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class CardService {
  constructor(private http: MyHttp) {
  }

  /**
   * 查询卡券列表
   * @param conditions
   */
  getCardList(page: any, card: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.post('/card/card-list?page='+page.page+'&size='+page.perPage,card);
  }

}