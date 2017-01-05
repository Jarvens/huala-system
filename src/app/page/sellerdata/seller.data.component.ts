import {Component, OnInit} from '@angular/core';
import {SellerDataService} from '../../service/seller.data.service';
@Component({
  selector: 'seller-data-component',
  templateUrl: './seller.data.component.html'
})

export class SellerDataComponent implements OnInit {
  constructor(private sellerDataService: SellerDataService) {
  }

  ngOnInit(): void {
  }

}