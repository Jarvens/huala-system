import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'hng-movie-component',
  templateUrl: './hng.movie.component.html'
})

export class HngMovieComponent implements OnInit {
  //当前活动对象
  currentActiveObj: any = {};

  ngOnInit(): void {
  }

  getActive(data: any) {
    this.currentActiveObj = data;
    console.log("当前活动对象 ->",data);
  }
}