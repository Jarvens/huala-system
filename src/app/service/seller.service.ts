import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class SellerService {

	constructor(private http:MyHttp){}

	getSellerList(page:any,searchKey:any,sellerId?:string,status?:string,keyType?:string){
		if(!page){
			page={page:1,perPage:10}
		}
		let url="/seller/seller-list?key="+searchKey
		return this.http.get(url,{});
	}

}