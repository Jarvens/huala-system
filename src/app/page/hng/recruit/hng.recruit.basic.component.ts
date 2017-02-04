import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'hng-recruit-basic-component',
  templateUrl: './hng.recruit.basic.component.html'
})

export class HngRecruitBasicComponent implements OnInit {
  wriInfoStatus: string = 'doing';
  relativeSellerInfoStatus: string = 'will';
  wriPublishTimeStatus: string = 'will';

  ngOnInit(): void {
  }

}