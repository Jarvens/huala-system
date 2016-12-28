import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class AppService {
    constructor(private http: MyHttp) {
    }

    getAppList(page: any) {
        return this.http.get("");
    }
}