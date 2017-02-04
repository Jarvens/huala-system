import {Component} from '@angular/core';
@Component({
  selector: 'choose-time',
  templateUrl: './hng.recruit.choosetime.component.html'
})
export class RecruitChooseTimeComponent {
  wriInfoStatus: string = 'complete';
  relativeSellerInfoStatus: string = 'complete';
  wriPublishTimeStatus: string = 'doing';
  //格式化时间
  _date_formate: string = 'yyyy-mm-dd';
  //招聘模板id
  recruitId: string = '111';
  //开始时间
  receiveDate(event: any) {

  }


}