import {Component,OnInit} from '@angular/core';
@Component({
  selector:'spike-main-component',
  templateUrl:'./spike.main.component.html'
})

export  class SpikeMainComponent implements OnInit{
  //默认选择tab页
  selected:string ='list';
  ngOnInit(): void {
  }

}