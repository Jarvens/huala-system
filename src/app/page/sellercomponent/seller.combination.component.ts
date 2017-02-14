import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {SellerService} from '../../service/seller.service';
@Component({
  selector: 'seller-combination-component',
  templateUrl: './seller.combination.component.html',
  styles: [`.slds-form-element__label{line-height:2rem;float:left}`]
})

export class SellerCombinationComponent implements OnChanges {

  /**
   * 当前店铺对象
   * @type {{}}
   */
  @Input() currentSeller: any = {};

  /**
   * 店铺扩展信息对象
   * @type {{}}
   */
  sellerExt: any = {};

  /**
   * 当前操作扩展信息对象
   * @type {{}}
   */
  operaExtObj: any = {};

  /**
   * 扩展信息编辑模态  打开|关闭
   * @type {boolean}
   */
  editOpened: boolean = false;

  constructor(private sellerService: SellerService) {
  }

  /**
   * 监听 当前店铺变化
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    let value = changes['currentSeller'];
    if (!value) {
      return;
    }
    if (value.currentValue.id != value.previousValue.id) {
      this.getSellerExt(this.currentSeller.id);
    }
  }

  /**
   * 根据店铺id 获取店铺扩展信息
   * @param id
   */
  getSellerExt(id: number) {
    this.sellerService.getSellerExt(id).subscribe(res=> {
      this.sellerExt = res.json();
    });
  }


  /**
   * 编辑店铺扩展信息
   * @param data
   */
  editExt(data: any) {
    this.editOpened = !this.editOpened;
    this.operaExtObj = data;
  }

  /**
   * 保存店铺扩展信息
   */
  saveExt() {

  }
}