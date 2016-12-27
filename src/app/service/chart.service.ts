import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class ChartService {
	constructor (private http: MyHttp) {
	}

	getChartData () {
		return this.http.get('/report/other/getChartData');
	}
}