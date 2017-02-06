import {Component, Input} from "@angular/core";
import {GoodsService} from "../../service/goods.service";

@Component({
  moduleId: "goodsList",
  selector: "goods-list",
  templateUrl: "goodsList.component.html"
})

export class GoodsListComponent {
  @Input() public cat:any;//所选类目;
  public goodsList:any = []; //商品列表;
  public imgUrl:string;
  public pageOpts:any = {}; //分页对象
  public confirmBoxOpen:boolean = false; //打开或关闭确认对话框;
  public editorOpened:boolean = false; //打开或关闭edit对话框;
  public delGoods:any;
  public editGoodsInfo:any;

  constructor(public goodsService:GoodsService) {
    this.imgUrl = window["ImgUrl"];
  }

  ngOnChanges(changes) {
    let catSelected = changes["cat"];

    if (!catSelected || !catSelected.currentValue) {
      return;
    } else if (catSelected.currentValue != catSelected.previousValue && !catSelected.currentValue.hasChildren) {
      this.getGoodsByCatId(1);
    }
  }

  /*
   * @description: Get goods by category id;
   * @params: pageNum:Number;
   * @date: 2017-01-05;
   */
  public getGoodsByCatId(pageNum:any) {
    if (!this.cat || !this.cat.id) {
      return;
    }

    let data = {
      page: 1,
      size: 10,
      categoryId: this.cat.id,
      searchKey: ""
    };

    if (pageNum) {
      data.page = pageNum;
    }

    this.goodsService.getGoodsByCat(data).subscribe(res => {
      let rData = res.json();

      this.goodsList = rData.rows;
      this.pageOpts = {
        total: rData.total > 0 ? rData.total : 1,
        limit: 5,
        perPage: 10,
        page: rData.page
      };

      this.goodsList.forEach((item, index) => {
        item.rank = index + 1;
        item.recPrice = item.recPrice / 100;
        item.salePrice = item.salePrice / 100;
      });
    });
  }

  /*
   * @description: Delete goods, it will bring up a confirm popup window;
   * @params: goods: Object;
   * @date: 2017-01-10;
   */
  public toDelete(goods):void {
    this.confirmBoxOpen = true;
    this.delGoods = goods;
  }

  /*
   * @description: Close confirm box;
   * @date: 2017-01-10;
   */
  public close():void {
    this.confirmBoxOpen = false;
  }

  /*
   * @description: Confirm to delete goods;
   * @date: 2017-01-10;
   */
  public confirmDel():void {
    this.confirmBoxOpen = false;
    this.goodsService.deleteGoods(this.delGoods).subscribe(res => {
      let data = res.json();

      if (data.success) {
        this.getGoodsByCatId(this.pageOpts.page);
      } else {
        console.error("删除商品失败!");
      }
    })
  }

  selectScope(event) {

  }

  searchByCondition(event) {

  }

  /*
   * @description: Click to edit goods, it will bring up a editor popup window;
   * @date: 2017-01-11;
   */
  public toEdit(goods):void {
    this.editorOpened = true;
    this.editGoodsInfo = goods;
  }

  /*
   * @description: Confirm to edit goods;
   * @date: 2017-01-11;
   */
  public confirmEdit():void {
    console.log("hello");
  }
}
