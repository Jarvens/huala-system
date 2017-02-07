import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
@Component({
  selector: 'hng-movie-component',
  templateUrl: './hng.movie.component.html'
})

export class HngMovieComponent implements OnInit,OnChanges {
  //当前活动对象
  currentActiveObj: any = {};

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let _value = changes['currentActiveObj'];
    if (_value && _value.currentValue != _value.previousValue) {
      console.log("改变了->");
    }
  }

  getActive(data: any) {
    this.currentActiveObj = data;
  }
}