import { Component, Input, OnChanges } from "@angular/core";
import { GoodsService } from "../../service/goods.service";

@Component({
  moduleId: "goodsList",
  selector: "goods-list",
  templateUrl: "goodsList.component.html"
})

export class GoodsListComponent {
  //所选类目;
  @Input() public cat:any;
  public goodsList:any = []; //商品列表;
  public imgUrl:string;
  public pageOpts: any = {}; //分页对象

  constructor(public goodsService: GoodsService) {
    this.imgUrl = window["ImgUrl"];
  }

  ngOnChanges(changes){
    let catSelected = changes["cat"];

    if(!catSelected || !catSelected.currentValue){
      return;
    }else if(catSelected.currentValue != catSelected.previousValue && !catSelected.currentValue.hasChildren){
      this.getGoodsByCatId(1);
    }
  }

  /*
   * @description: Get goods by category id;
   * @params: pageNum:Number;
   * @date: 2017-01-05;
   */
  public getGoodsByCatId(pageNum:any){
    if(!this.cat || !this.cat.id){
      return;
    }

    let data = {
      page: 1,
      size: 10,
      categoryId: this.cat.id,
      searchKey: ""
    };

    if(pageNum){
      data.page = pageNum;
    }

    this.goodsService.getGoodsByCat(data).subscribe(res => {
      let rData = res.json();

      this.goodsList = rData.rows;
      this.pageOpts = {
        total: rData.total > 0?rData.total:1,
        limit: 5,
        perPage: 10,
        page: rData.page
      };

      this.goodsList.forEach((item, index) => {
        item.rank = index + 1;
        item.recPrice = item.recPrice / 100;
        item.salePrice = item.salePrice / 100;
      });
    })
  }
}
