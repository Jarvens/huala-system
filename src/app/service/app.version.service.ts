import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class AppVersionService {
  constructor(private http: MyHttp) {
  }

  getAppList(page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/sysConfig/app-version-list",{page:page.page,size:page.perPage});
  }
}