import {Component, Input, OnChanges} from '@angular/core';
@Component({
  selector: 'seller-detail-component',
  templateUrl: './seller.detail.component.html',
  styleUrls: ['./seller.detail.component.css']
})
export class SellerDetailComponent implements OnChanges {

  /**
   * seller-main页面传递过来的seller对象
   * @type {{}}
   */
  @Input() sellerObj: any = {};
  /**
   * 图片地址前缀
   */
  commonImgUrl = process.env.ImgUrl;

  /**
   * 当前选中tab
   * @type {string}
   */
  selected: string = 'sellerInfo';

  /**
   * 店铺修改模态 打开|关闭
   * @type {boolean}
   */
  sellerInfoOpened: boolean = false;

  /**
   * 显示|隐藏 *
   * @type {boolean}
   */
  required: boolean = true;

  ngOnChanges(changes: any): void {
    let change: any = changes['sellerObj'];
    if (!change.currentValue) {
      return;
    }
    if (change.currentValue.id != change.previousValue.id) {
      console.log('发生改变了 ... ->');
      console.log(this.sellerObj);
    }
  }

  /**
   * 修改店铺信息
   */
  editSellerInfo() {
    this.sellerInfoOpened = !this.sellerInfoOpened;
  }

  /**
   * 关闭修改模态
   */
  cancel() {
    this.sellerInfoOpened = !this.sellerInfoOpened;
  }

}