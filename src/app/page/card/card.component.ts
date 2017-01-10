import {Component, OnInit} from '@angular/core';
import {CardService} from '../../service/card.service';
@Component({
  selector: 'card-component',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
  }

}