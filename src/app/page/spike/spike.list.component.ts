import {Component, OnInit} from '@angular/core';
import {SpikeService} from '../../service/spike.service';
@Component({
  selector: 'spike-list-component',
  templateUrl: './spike.list.component.html'
})

export class SpikeListComponent implements OnInit {
  ngOnInit(): void {
    this.getSpikeList();
  }

  constructor(private spikeService: SpikeService) {
  }

  //秒杀商品对象
  spikeArray: Array<any> = [];

  //获取秒杀商品列表
  getSpikeList() {
    this.spikeService.getSpikeList().subscribe(res=> {
      this.spikeArray = res.json();
    });
  }

}