import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class HngService {
  constructor(private http: MyHttp) {
  }

  getJobList(key: string, page: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/recruit/list-job", {page: page.page, size: page.perPage, searchKey: key});
  }


  deleteJob(data:any){
    return this.http.post("/recruit/delete-job",data);
  }
}