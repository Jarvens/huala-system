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


  deleteJob(data: any) {
    return this.http.post("/recruit/delete-job", data);
  }

  saveJob(data: any) {
    return this.http.post("/recruit/save-job", data);
  }

  /*
   * @Description: Get companies list;
   * @Date: 2017-01-16;
   */
  getCompanies(data) {
    let gUrl = "/recruit/list-company";

    return this.http.get(gUrl, data);
  }

  /*
   * @Description: Delete the company;
   * @Date: 2017-01-17;
   */
  deleteCompany(pData) {
    let pUrl = "/recruit/del-company";

    return this.http.post(pUrl, pData);
  }

  /*
   * @Description: Add a new company;
   * @Date: 2017-01-17;
   */
  addCompany(pData) {
    let pUrl = "/recruit/save-company";

    return this.http.post(pUrl, pData);
  }

  /*
   * @Description: Add a new company;
   * @Date: 2017-01-17;
   */
  updateCompany(pData) {
    return this.addCompany(pData);
  }

  //查询招聘信息列表
  getRecruitData(page: any, conditions: any) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/recruit/list-recruit", {
      page: page.page,
      size: page.perPage,
      key: conditions.key,
      status: conditions.status,
      companyId: conditions.companyId,
      jobId: conditions.jobId,
      sellerScope: conditions.sellerScope
    });
  }

  //查询岗位 all
  getAllJob(){
    return this.http.get("/recruit/all-job");
  }
  //查询公司 all
  getAllCompany(){
    return this.http.get("/recruit/all-company");
  }
}