import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'confirm-prompt-component',
  templateUrl: './confirm.prompt.component.html'
})


/**
 * Prompt 提示信息
 */
export class ConfirmPromptComponent {

  //打开|关闭confirm
  @Input() isOpen: boolean = false;
  @Output() cancelFunction = new EventEmitter<boolean>();
  @Output() confirmFunction = new EventEmitter<boolean>();
  @Input() promptMessage: string = '确定要删除吗?';
  //取消
  cancel() {
    this.cancelFunction.emit(!this.isOpen);
  }

  //确定
  confirm() {
    this.confirmFunction.emit(!this.isOpen);
  }

}