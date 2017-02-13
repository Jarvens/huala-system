import {Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import {SpikeService} from '../../service/spike.service';
@Component({
  selector: 'seller-goods-component',
  templateUrl: './seller.goods.component.html'
})

export class SellerGoodsComponent implements OnChanges {


  placeholder: string = '搜索..商品名称';
  /**
   * 图片前缀
   */
  commonImgUrl = process.env.ImgUrl;
  /**
   * 商品数据集合
   * @type {{}}
   */
  goodsDataList: any = {};

  /**
   * 当前店铺对象
   * @type {{}}
   */
  @Input() currentSeller: any = {};
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 7};

  constructor(private spikeService: SpikeService) {
  }

  /**
   * 监听 当前店铺对象发生改变
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    let result = changes['currentSeller'];
    if (result.currentValue.id != result.previousValue.id) {
      this.getGoodsList(this.currentSeller.id, this.pageOpts);
    }
  }

  /**
   * 异步搜索
   * @param data
   */
  searchByCondition(data: string) {

  }

  getGoodsList(id: number, page: any) {
    this.spikeService.getSellerGoods(id, page).subscribe(res=> {
      this.goodsDataList = res.json();
    });
  }

  pageChange(data: number) {

  }
}