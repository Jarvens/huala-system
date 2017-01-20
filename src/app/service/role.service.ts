import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class RoleService {
  constructor(private http: MyHttp) {
  }

  getRoleList(key: string, Page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/role/sys-role-list", {page: page.page, size: page.perPage});
  }
}