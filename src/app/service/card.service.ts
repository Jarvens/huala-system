import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class CardService {
  constructor(private http: MyHttp) {
  }
}