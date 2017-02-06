import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
  moduleId: "goodsInfo",
  selector: "goods-info",
  templateUrl: "goodsInfo.component.html"
})

export class GoodsInfoComponent implements OnChanges{
  @Input() public cat:any; //外部传入的类目;
  @Input() public goodsInfoIpt:any; //编辑时的商品信息;
  @Output() public selectTab = new EventEmitter<string>();
  @Output() public goodsInfoOut = new EventEmitter<any>();
  public goodsInfo:any = {
    cid: "",
    cName: "",
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

  constructor(){
    if(this.cat){
      this.goodsInfo.cid = this.cat.id;
      this.goodsInfo.cName = this.cat.name;
    }
  }
  ngOnChanges(changes):void {
    let chg = changes["goodsInfoIpt"];
    if(chg && chg.currentValue && chg.currentValue != chg.previousValue){
      this.goodsInfo = this.goodsInfoIpt;
    }
  }

  public getGoodsInfo(){
    this.goodsInfo.cid = this.cat.id;
    this.goodsInfoOut.emit(this.goodsInfo);
  }
}