import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'spike-list-component',
  templateUrl: './spike.list.component.html'
})

export class SpikeListComponent implements OnInit {
  ngOnInit(): void {
  }

  //秒杀商品对象
  spikeArray: Array<any> = [];

}