import {Component, Input, OnChanges} from '@angular/core';
@Component({
  selector: 'seller-detail-component',
  templateUrl: './seller.detail.component.html',
  styleUrls: ['./seller.detail.component.css']
})
export class SellerDetailComponent implements OnChanges {
  
  //seller-main页面传递过来的seller对象
  @Input() detailFromSellerMain: any = {};
  //图片地址前缀
  commonImgUrl = process.env.ImgUrl;
  
  ngOnChanges(changes): void {
    let change: any = changes['detailFromSellerMain'];
    if (!change.currentValue) {
      return;
    }
    if (change.currentValue != change.previousValue) {
      console.log("调用根据店铺id查询方法");
    }
  }
  
}