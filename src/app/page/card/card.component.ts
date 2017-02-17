import {Component, OnInit} from '@angular/core';
import {CardService} from '../../service/card.service';
@Component({
  selector: 'card-component',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  //卡券对象
  cardDataList: any = {};

  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}

  //查询条件对象
  condiitons: any = {types: '0'};

  placeholder: string = '店铺..卡券';

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

}