import {Component} from '@angular/core';
@Component({
  selector: 'hng-movie-list-component',
  templateUrl: './hng.movie.list.component.html'
})

export class HngMovieListComponent {

  //活动对象
  public activity: Array<any> = [];
  //影片列表
  public movieDataList: Array<any> = [];
  //分页对象
  public pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
}