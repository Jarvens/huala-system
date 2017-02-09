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

  /**
   * 秒杀商品对象
   * @type {Array}
   */
  spikeArray: Array<any> = [];
  /**
   * 秒杀编辑模态 打开|关闭
   * @type {boolean}
   */
  opened: boolean = false;
  /**
   * 操作对象
   * @type {{}}
   */
  operaObj: any = {};
  /**
   * 显示 *
   * @type {boolean}
   */
  required: boolean = true;
  /**
   * prompt提示消息
   * @type {string}
   */
  promptMessage: string = '';
  /**
   * 打开|关闭 prompt
   * @type {boolean}
   */
  notificationOpen: boolean = false;
  /**
   * toast类型
   * @type {string}
   */
  toastType: string = 'success';
  /**
   * toast提示信息
   * @type {string}
   */
  toastMessage: string = '';
  /**
   * 打开|关闭toast
   * @type {boolean}
   */
  showAlert: boolean = false;


  /**
   * 获取秒杀商品列表
   */
  getSpikeList() {
    this.spikeService.getSpikeList().subscribe(res=> {
      this.spikeArray = res.json();
    });
  }

  edit(data: any) {
    this.operaObj = data;
    this.opened = !this.opened;
  }

  /**
   * prompt取消事件
   */
  cancelPrompt() {

  }

  /**
   * prompt确认事件
   */
  confirm() {

  }

  /**
   * toast传播事件
   * @param data
   */
  notifyParamFunction(data: any) {

  }

}