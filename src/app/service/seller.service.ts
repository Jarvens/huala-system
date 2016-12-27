import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerService {

	constructor(private http:MyHttp){}

	getSellerList(page:any,searchKey:any){
		return this.http.get();
	}

}