import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class LoginService {
	constructor (private http: MyHttp) {
	}

	login(user:any){
		return this.http.post('/sys/login',user);
	}

}