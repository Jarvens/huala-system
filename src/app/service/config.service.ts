import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class ConfigService {
  constructor(private http: MyHttp) {
  }

  getConfigList(page: any, key: string) {
    if (!page) {
      page = {page: 1, perPage: 10}
    }
    return this.http.get("/sysConfig/list", {key: key, page: page.page, size: page.perPage});
  }

  editConfig(data: any) {
    return this.http.post("/sysConfig/edit",data);

  }
}