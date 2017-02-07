import {Component,Input} from '@angular/core';
@Component({
  selector: 'hng-movie-entry-component',
  templateUrl: './hng.movie.entry.component.html'
})
export class HngMovieEntryComponent {

  //当前商家
  public currentSeller: any = {};
  //当前活动对象
  @Input() currentActiveObj:any={};


  //关联商家事件
  targetFunction(data: any) {
    this.currentSeller = data;
  }
}