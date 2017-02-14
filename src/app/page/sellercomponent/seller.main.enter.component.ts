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

  copySeller(data: any) {
    this.currentSeller = data;
    console.log(data);
  }
}