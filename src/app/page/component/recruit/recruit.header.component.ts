import {Component, Input} from '@angular/core';
@Component({
  selector: 'recruit-header',
  templateUrl: './recruit.header.component.html'
})

export class RecruitHeaderComponent {

  //填写招聘信息标识状态  未开始:will|进行中:doing|已完成:complete
  @Input() wriInfoStatus: string = 'doing';
  //关联店铺信息标识状态  未开始|进行中|已完成
  @Input() relativeSellerInfoStatus: string = 'will';
  //填写发布时间标识状态  未开始|进行中|已完成
  @Input() wriPublishTimeStatus: string = 'will';
}