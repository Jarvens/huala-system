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
  required: boolean = true;
  //prompt提示消息
  promptMessage: string = '';
  //打开|关闭 prompt
  notificationOpen: boolean = false;
  //toast类型
  toastType: string = 'success';
  //toast提示信息
  toastMessage: string = '';
  //打开|关闭toast
  showAlert: boolean = false;


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

  //prompt取消事件
  cancelPrompt() {

  }

  //prompt确认事件
  confirm() {

  }

  //toast传播事件
  notifyParamFunction(data: any) {

  }

}