import {Component, Input} from '@angular/core';
@Component({
  selector: 'toast-component',
  templateUrl: './toast.component.html'
})

export class ToastComponent {

  //超时时间
  @Input() timeOut: number = 5000;
  //提示消息
  @Input() toastMessage: string = '默认提示消息';
  //toast提示类型  success | error| warning |info
  @Input() toastType: string = 'error';
  //显示|关闭toast
  showAlert: boolean = false;
  //关闭方法
  onClose() {
    this.showAlert = !this.showAlert;
  }
}