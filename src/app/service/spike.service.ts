import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SpikeService{
  constructor(private http:MyHttp){}

  getSpikeList(){
    return this.http.get('/spike/activity-list');
  }
}