import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class OrderService {
	constructor (private http: MyHttp) {
	}
	getOrderListYestoday(page:any){
		//return this.http()
	}
}