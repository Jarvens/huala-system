import {Component, Input, OnChanges} from '@angular/core';
@Component({
  selector: 'seller-detail-component',
  templateUrl: './seller.detail.component.html'
})
export class SellerDetailComponent implements OnChanges {

  //seller-main页面传递过来的seller对象
  @Input() detailFromSellerMain: any = {};

  ngOnChanges(changes): void {
    let change = changes['detailFromSellerMain'];
    if (!change) {
      return;
    }
    if (change.currentValue != change.previousValue) {
      console.log("改变了");
      console.log(change);
      console.log("调用根据店铺id查询方法");
    }
  }

}