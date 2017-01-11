import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GoodsService } from "../../service/goods.service";

@Component({
  moduleId: "goodsInfo",
  selector: "goods-info",
  templateUrl: "goodsInfo.component.html"
})

export class GoodsInfoComponent {
  @Input() public cat:any; //外部传入的类目;
  @Output() public selectTab = new EventEmitter<string>();
  public goodsInfo:any = {
    cid: "",
    title: "",
    goodsSn: "",
    recPrice: "",
    salePrice: "",
    picUrl: "",
    picDescription: [],
    goodsExtendList: [
      {
        metaKey: "info",
        meta_desc: "商品信息",
        dataKey: "img_url",
        dataValue: [],
        dataDesc: "图片地址",
        isValid: "1",
        isFixed: "1"
      }
    ]
  };

  constructor(public goodsService: GoodsService){}

  /*
   * @Description: Check the form data;
   * @Date: 2017-01-10;
   */
  public checkGoodsInfo(goods):boolean {
    let goodsInfo = goods;

    if(!goodsInfo.title){
      return false;
    } else if(!goodsInfo.goodsSn){
      return false;
    } else if(!goodsInfo.recPrice || isNaN(goodsInfo.recPrice)){
      return false;
    } else if(!goodsInfo.salePrice || isNaN(goodsInfo.salePrice)){
      return false;
    }

    return true;
  }

  /*
   * @Description: Add new goods;
   * @Date: 2017-01-10;
   */
  public addGoods():void {
    console.log("add");
    if(!this.cat || !this.cat.id){
      return;
    }else {
      this.goodsInfo.cid = this.cat.id;
      if(!this.checkGoodsInfo(this.goodsInfo)){
        return;
      }
      this.goodsService.addGoods(this.goodsInfo).subscribe(res => {
        let data = res.json();
        if(data.success){
          this.selectTab.emit("goodsList");
        }else {
          alert(data.errorCode + ": " + data.message);
          console.error(data.errorCode + ": " + data.message);
        }
      });
    }
  }

}