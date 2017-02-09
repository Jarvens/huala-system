import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class BasicReportService {
  constructor(private http:MyHttp){}

  /**
   * 查询报表
   * @returns {Observable<Response>}
   */
  getReportList(){
    return this.http.get();
  }


}