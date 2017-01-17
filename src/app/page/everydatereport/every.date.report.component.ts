import {Component} from '@angular/core';
import {EveryDateReportService} from '../../service/every.date.report.service';
@Component({
  selector: 'every-date-report-component',
  templateUrl: './every.date.report.component.html',
  styleUrls: ['./every.date.report.component.css']
})

export class EveryDateReportComponent {

  constructor(private everyDateReportService: EveryDateReportService) {
  }

  //每日报表数据对象
  everyDateReport: any = {};
  //Tips打开|关闭
  open: boolean = false;
  //日期对象
  queryDate: string = '';
  //Toast提示
  toastMessage: string = '请选择日期';
  //类型
  toastType: string = 'warning';
  //显示|关闭toast
  showAlert: boolean = false;
  //格式化时间
  _date_formate:string ='yyyymmdd';

  //触发查询操作
  receiveDate(event: any) {
    this.queryDate = event;
    this.everyDateReportService.getEveryDateReport(event).subscribe(res=> {
      this.everyDateReport = res.json().body;
    });
  }

  exportDataReport() {
    if (!this.queryDate) {
      this.showAlert = !this.showAlert;
      return;
    }
    let city = localStorage.getItem("hualaCity");
    this.everyDateReportService.exportDataReport(city,this.queryDate);

  }

  //toast通知
  notifyParamFunction(event) {
    this.showAlert = !this.showAlert;
  }

}