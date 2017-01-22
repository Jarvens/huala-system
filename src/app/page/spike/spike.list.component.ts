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
  //秒杀编辑模态 打开|关闭
  opened: boolean = false;
  //操作对象
  operaObj: any = {};
  //显示 *
  required:boolean =true;

  //获取秒杀商品列表
  getSpikeList() {
    this.spikeService.getSpikeList().subscribe(res=> {
      this.spikeArray = res.json();
    });
  }

  edit(data: any) {
    this.operaObj = data;
    this.opened = !this.opened;
  }

}