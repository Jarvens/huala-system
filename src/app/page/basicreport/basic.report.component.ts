import {Component} from '@angular/core';
import {BasicReportService} from '../../service/basic.report.service';
@Component({
  selector: 'basic-report-component',
  templateUrl: './basic.report.component.html'
})

export class BasicReportComponent {

  constructor(private basicReportService: BasicReportService) {
  }
}