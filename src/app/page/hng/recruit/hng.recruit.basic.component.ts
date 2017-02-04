import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'hng-recruit-basic-component',
  templateUrl: './hng.recruit.basic.component.html'
})

export class HngRecruitBasicComponent implements OnInit {
  wriInfoStatus: string = 'doing';
  relativeSellerInfoStatus: string = 'will';
  wriPublishTimeStatus: string = 'will';
  //显示|隐藏  *
  required: boolean = true;
  //招聘模板id
  recruitId:string='111';

  ngOnInit(): void {
  }

  //保存数据以及跳转到下一步
  nextStep() {

  }

  //上一步
  previousStep() {

  }

}