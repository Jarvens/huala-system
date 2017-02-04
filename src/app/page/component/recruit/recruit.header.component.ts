import {Component, Input} from '@angular/core';
@Component({
  selector: 'recruit-header',
  templateUrl: './recruit.header.component.html'
})

export class RecruitHeaderComponent {

  //填写招聘信息标识状态  未开始|进行中|已完成
  @Input() wriInfoStatus: string;
  //关联店铺信息标识状态  未开始|进行中|已完成
  @Input() relativeSellerInfoStatus: string;
  //填写发布时间标识状态  未开始|进行中|已完成
  @Input() wriPublishTimeStatus: string;
}