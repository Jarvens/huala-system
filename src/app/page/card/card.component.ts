import {Component, OnInit} from '@angular/core';
import {CardService} from '../../service/card.service';
@Component({
  selector: 'card-component',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  //卡券对象
  cardList: any = {};

  //分页对象
  pageOpts: any = {page:1,total: 0, limit: 3, perPage: 10}

  //查询条件对象
  condiitons:any={};

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
  }

}