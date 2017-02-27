import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class BasicReportService {
  constructor(private http: MyHttp) {
  }

  /**
   * 查询基础统计信息
   * @returns {Observable<Response>}
   */
  getSqlDataList() {
    return this.http.get('/tongji/sql');
  }


}