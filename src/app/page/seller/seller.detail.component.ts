import {Component, Input, OnChanges} from '@angular/core';
import {SellerService} from '../../service/seller.service';
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

  /**
   * toast类型
   * @type {string}
   */
  toastType: string = 'success';
  /**
   * toast提示消息
   * @type {string}
   */
  toastMessage: string = '';
  /**
   * 打开|关闭 toast
   * @type {boolean}
   */
  showAlert: boolean = false;

  constructor(private sellerService: SellerService) {
  }

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

  /**
   * 开关店铺 | 上下线店铺
   */
  sellerStatus(status: string) {
    let array: Array<number> = [];
    array.push(this.sellerObj.id);
    this.sellerService.updateSellerStatus(array, status).subscribe(res=> {
      let result = res.json();
      if (result.success) {
        this.toastFunction('修改成功', 'success');
      } else {
        this.toastFunction('修改失败', 'error');
      }
    });
  }

  /**
   * toast函数
   * @param message
   * @param toastType
   */
  toastFunction(message: string, toastType: string) {
    this.showAlert = !this.showAlert;
    this.toastMessage = message;
    this.toastType = toastType;
  }

}