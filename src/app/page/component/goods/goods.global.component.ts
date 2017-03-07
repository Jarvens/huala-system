import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {GoodsGlobalService} from '../../../service/goods.global.service';
@Component({
  selector: 'goods-global-component',
  templateUrl: './goods.global.component.html'
})

export class GoodsGlobalComponent implements OnChanges {

  /**
   * 当前店铺id
   * @type {string}
   */
  @Input() currentSellerId: number = 0;

  /**
   * 商品集合
   * @type {{}}
   */
  goodsData: any = {};

  /**
   * 分页
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};

  /**
   * 搜索关键字
   * @type {string}
   */
  key: string = '';

  /**
   * 选择商品集合
   * @type {Set<number>}
   */
  goodsArray = new Set<number>();

  @Output() goodsRef = new EventEmitter < Array<number>();

  constructor(private service: GoodsGlobalService) {
  }

  /**
   * 分页
   * @param data
   */
  pageChange(data: number) {
    this.pageOpts.page = data;
    this.goodsList();
  }

  /**
   * 选择商品事件
   * @param data
   */
  emitMethod(data: number) {
    if (this.goodsArray.has(data)) {
      this.goodsArray.delete(data);
    } else {
      this.goodsArray.add(data);
    }
    this.goodsRef(this.convertSetToList(this.goodsArray));
  }

  ngOnChanges(changes: any): void {
    let value = changes["currentSellerId"];
    if (value == 0) {
      return;
    }
    if (value.currentValue != value.previousValue) {
      this.goodsList();
    }
  }

  goodsList() {
    this.service.getGoodsBySellerId(this.currentSellerId, this.pageOpts, this.key).subscribe(res=> {
      this.goodsData = res.json();
    });
  }

  /**
   * 条件搜索
   * @param data
   */
  searchByCondition(data: string) {
    this.key = data;
    this.goodsList();
  }

  /**
   * Set集合转换为List集合
   * @param source
   * @returns {Array<number>}
   */
  convertSetToList(source: Set<number>) {
    let array: Array<number> = [];
    source.forEach(function (value: any) {
      array.push(value);
    });
    return array;
  }

}