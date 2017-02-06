import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class ArticleService {

  constructor(private http: MyHttp) {
  }

  //根据目录id获取目录树
  getArticleListByCategoryId(id: string) {
    return this.http.get("/article/article-category?categoryId=" + id);
  }

}