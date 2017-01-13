import {Component} from '@angular/core';
import {EveryDateReportService} from '../../service/every.date.report.service';
@Component({
  selector: 'every-date-report-component',
  templateUrl: './every.date.report.component.html'
})

export class EveryDateReportComponent {

  constructor(private everyDateReportService:EveryDateReportService){}
  //数据集合
  reportDataList: any = {}
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}

  //分页事件
  pageChange(event) {

  }

}