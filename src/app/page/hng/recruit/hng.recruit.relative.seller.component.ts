import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'relative-seller',
  templateUrl: './hng.recruit.relative.seller.component.html'
})

export class RelativeSellerComponent implements OnInit {
  wriInfoStatus: string = 'complete';
  relativeSellerInfoStatus: string = 'doing';
  wriPublishTimeStatus: string = 'will';
  recruitId: string = '111';

  ngOnInit(): void {
  }

}