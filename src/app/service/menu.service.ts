import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class MenuService {
	constructor (private http: MyHttp) {

	}

	menuList () {
		return this.http.get("/menu/menu-list");
	}

}