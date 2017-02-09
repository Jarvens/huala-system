import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class RoleService {
  constructor(private http: MyHttp) {
  }

  /**
   * 查询权限列表
   * @param key
   * @param page
   * @returns {Observable<Response>}
   */
  getRoleList(key: string, page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/role/sys-role-list", {page: page.page, size: page.perPage});
  }

  /**
   * 创建角色
   * @param data
   * @returns {Observable<Response>}
   */
  createRole(data:any){
    return this.http.post("/role/create-role",data);
  }
}