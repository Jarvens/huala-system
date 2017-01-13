import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class FinanceService{
  constructor(private http:MyHttp){}

}