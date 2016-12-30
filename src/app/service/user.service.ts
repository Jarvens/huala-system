import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class UserService {

  constructor(private http: MyHttp) {
  }

  getUserList(page: any, key: string) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/role/user-list", {page: page.page, size: page.perPage, searchKey: key});
  }
}