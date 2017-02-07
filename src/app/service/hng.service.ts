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
  getAllJob() {
    return this.http.get("/recruit/all-job");
  }

  //查询公司 all
  getAllCompany() {
    return this.http.get("/recruit/all-company");
  }

  //保存招聘基本信息
  saveRecruitBasicData(data: any) {
    return this.http.post("/recruit/save-recruit", data);
  }

  //根据招聘id查询
  getRecruitById(id: number) {
    return this.http.get("/recruit/get-by-id", {id: id});
  }

  //查询影片活动列表
  getMovieActiveDataList(page: any, key?: string) {
    if (!page) {
      page = {page: 1, perpage: 10};
    }
    return this.http.get("/preferential/movie-active-list", {page: page.page, size: page.perPage, key: key});
  }

  //删除活动信息
  delActive(data: any) {
    return this.http.post("/preferential/movie-active-delete", data);
  }

  //电影活动 统计分页
  getMovieVote(page: any, id: string) {
    if (!page) {
      page = {page: 1, perPage: 10};
    }
    return this.http.get("/preferential/statistical", {page: page.page, size: page.perPage, movieId: id});
  }
}