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
  public getCardList(conditions: any) {

  }

}