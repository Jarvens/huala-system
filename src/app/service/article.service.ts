import {Injectable} from '@angular/core';
import {MyHttp} from '../core/http';
@Injectable()
export class ArticleService{

  constructor(private http:MyHttp){}


}