import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class PictureService {
	constructor (private http: MyHttp){}

	getPictureList (page: any, folder: string) {
		if(!page) {
			page = {page: 1, perPage: 12}
		}
		return this.http.get("/file/category", {dir: folder, page: page.page, size: page.perPage, isFile: false});
	}
}