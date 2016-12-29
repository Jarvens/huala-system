import {Component, OnChanges} from '@angular/core';
@Component({
  selector: 'seller-main-component',
  templateUrl: './seller.main.component.html'
})
export class SellerMainComponent implements OnChanges {
  selected: string = 'list';
  //seller-list页面传递过来的seller对象
  detailFromSellerList: any = {};
  //手动触发tab切换事件
  tabChange(event) {

  }


  //通过seller-list页面传递值 自动切换tab页
  switchTabs(event) {
    this.detailFromSellerList = event;
    this.selected = 'detail';
  }
}