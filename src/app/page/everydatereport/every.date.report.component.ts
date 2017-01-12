import {Component} from '@angular/core';
@Component({
  selector: 'every-date-report-component',
  templateUrl: './every.date.report.component.html'
})

export class EveryDateReportComponent {

  //数据集合
  reportDataList: any = {}
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}

  //分页事件
  pageChange(event) {

  }

}