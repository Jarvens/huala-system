import {Component, OnInit} from '@angular/core';
import {CardService} from '../../service/card.service';
@Component({
  selector: 'card-component',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  /**
   * 卡券对象
   * @type {{}}
   */
  cardDataList: any = {};

  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}

  /**
   * 查询条件对象
   * @type {{types: string}}
   */
  condiitons: any = {types: '0'};

  /**
   * placeholder
   * @type {string}
   */
  placeholder: string = '店铺..卡券';

  /**
   * 新增卡券  打开|关闭
   * @type {boolean}
   */
  createOpened: boolean = false;

  /**
   * 操作对象
   * @type {{}}
   */
  operaObj: any = {};

  /**
   * 当前卡券对象
   * @type {{}}
   */
  currentCard:any={};

  /**
   * 编辑卡券  打开|关闭
   * @type {boolean}
   */
  editOpned: boolean = false;

  /**
   * 搜索关键字
   * @type {string}
   */
  searchKey:string ='';

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.getCardList(this.pageOpts, this.condiitons);
  }

  /**
   * 查询卡券列表
   * @param page
   * @param conditions
   */
  getCardList(page: any, conditions: any) {
    this.cardService.getCardList(page, conditions).subscribe(res=> {
      this.cardDataList = res.json();
      console.log(res.json())
    });
  }

  /**
   * 分页事件
   * @param data
   */
  pageChange(data: number) {
    this.pageOpts.page = data;
  }

  /**
   * 编辑事件
   * @param data
   */
  edit(data: any) {
    this.editOpned = !this.editOpned;
    this.currentCard = data;
  }

  /**
   * 条件搜索
   * @param data
   */
  searchByCondition(data:string){
    this.searchKey = data;
  }

  /**
   * 接收 seller-list选中的店铺
   * @param data
   */
  showData(data:any){
    console.log('选择店铺 ->',data);
  }

}