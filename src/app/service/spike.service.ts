import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SpikeService{
  constructor(private http:MyHttp){}

  getSpikeList(){
    return this.http.get('/spike/activity-list');
  }

  /**
   * 保存 秒杀信息
   * @param data
   * @returns {Observable<Response>}
   */
  saveSpike(data:any){
    return this.http.post('/spike/modify-spike-goods',data);
  }

}