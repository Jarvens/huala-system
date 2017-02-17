import {Component, Input, OnChanges} from '@angular/core';
@Component({
  selector: 'card-info-component',
  templateUrl: './card.info.component.html'
})

export class CardInfoComponent implements OnChanges {


  /**
   * 显示 |隐藏  *
   * @type {boolean}
   */
  required: boolean = true;

  /**
   * 编辑对象
   * @type {{}}
   */
  @Input() editObj: any = {};

  showData(data: any) {

  }


  ngOnChanges(changes: any): void {
    let value: any = changes['editObj'];
    if (value.currentValue != value.previousValue) {
      console.log('当前卡券对象 ->', this.editObj);
    }
  }

}