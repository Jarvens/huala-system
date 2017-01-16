import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerAuditService{
  constructor(private http:MyHttp){}
}
