import {Component} from '@angular/core';
@Component({
  selector: 'seller-main-enter-component',
  templateUrl: './seller.main.enter.component.html'
})

export class SellerMainEnterComponent {

  /**
   * 当前店铺对象
   * @type {{}}
   */
  currentSeller: any = {};

  /**
   * 显示|隐藏 复选框
   * @type {boolean}
   */
  showCheckBox: boolean = true;

  /**
   * prompt提示信息
   * @type {string}
   */
  promptMessage: string = '您确定要删除吗?';

  /**
   * 打开 |关闭  prompt
   * @type {boolean}
   */
  notificationOpen: boolean = false;

  /**
   * toast 类型
   * @type {string}
   */
  toastType: string = 'success';
  /**
   * toast 提示信息
   * @type {string}
   */
  toastMessage: string = '';

  /**
   * 打开 |关闭 toast
   * @type {boolean}
   */
  showAlert: boolean = false;

  /**
   * 操作对象集合
   * @type {Set<any>}
   */
  operaSet = new Set<any>();

  /**
   * 商品ArrayList
   * @type {Array}
   */
  goodsResultArray: Array<any> = [];

  copySeller(data: any) {
    this.currentSeller = data;
  }

  isShow() {
    this.showCheckBox = !this.showCheckBox;
  }

  /**
   * prompt关闭事件
   */
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  /**
   * prompt确定事件
   */
  confirm() {

  }

  /**
   * toast传递事件
   * @param data
   */
  notifyParamFunction(data: boolean) {
    this.showAlert = data;
  }

  /**
   * 批量删除 按钮事件
   */
  muiltyDel() {
    this.notificationOpen = !this.notificationOpen;
  }

  /**
   * 选择商品事件
   * @param data
   */
  receiveGoods(data: any) {
    if (this.operaSet.has(data)) {
      this.operaSet.delete(data);
    } else {
      this.operaSet.add(data);
    }
    this.goodsResultArray = this.convertSetToList(this.operaSet);
  }

  /**
   * Set 集合转换 ArrayList 集合
   * @param source
   * @returns {Array<any>}
   */
  convertSetToList(source: Set<any>) {
    let array: Array<any> = [];
    source.forEach(function (obj: any) {
      array.push(obj);
    });
    return array;
  }


}