import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'refund-order-component',
  templateUrl: './refund.order.component.html'
})

export class RefundOrderComponent implements OnInit {

  placeholder: string = '搜索..订单编号..手机号';
  //搜索关键字
  key: string = '';
  //订单列表
  refundOrderList: any = {};
  //显示|隐藏  时间选项卡
  showTime: boolean = false;
  //时间格式
  date_formate: string = 'yyyy-mm-dd';
  //toast打开|关闭
  showAlert: boolean = false;
  //toast类型
  toastType: string = '';
  //toast消息
  toastMessage: string = '';

  ngOnInit(): void {
  }

  //异步搜索
  searchByCondition(event) {

  }

  //时间选择事件
  dateChange(event) {
    console.log(event);
  }

  exportRefundOrder() {
    this.toastFunction('敬请期待...','info');
  }

  //toast传递事件
  notifyParamFunction(event:boolean) {
    this.showAlert = event;
  }


  //toast函数
  toastFunction(message: string, toastType: string) {
    this.showAlert = !this.showAlert;
    this.toastMessage = message;
    this.toastType = toastType;
  }

}