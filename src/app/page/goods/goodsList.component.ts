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
  public pageOpts: any = {total: 100, limit: 5, perPage: 10, page: 1}; //分页对象

  constructor(public goodsService: GoodsService) {
    this.imgUrl = window["ImgUrl"];
  }

  ngOnChanges(changes){
    let catSelected = changes["cat"];
    if(!catSelected || !catSelected.currentValue){
      return;
    } else if(catSelected.currentValue != catSelected.previousValue && !catSelected.currentValue.hasChildren){
      this.getGoodsByCat(1);
    }
  }

  /*
   * @description: Get goods by category id;
   * @params: pageNum:Number;
   * @date: 2017-01-05;
   */
  public getGoodsByCat(pageNum:any){
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
      let data = res.json();
      this.goodsList = data.rows;
      this.pageOpts = {
        total: data.total,
        limit: 5,
        perPage: 10,
        page: data.page
      };
      console.log(this.goodsList);
      this.goodsList.forEach((item, index) => {
        item.rank = index + 1;
        item.recPrice = item.recPrice / 100;
        item.salePrice = item.salePrice / 100;
      })
    })
  }
}
