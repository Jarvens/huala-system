import {Component, OnInit} from '@angular/core';
import {BasicReportService} from '../../service/basic.report.service';
@Component({
  selector: 'basic-report-component',
  templateUrl: './basic.report.component.html'
})

export class BasicReportComponent implements OnInit {

  /**
   * sql集合
   * @type {{}}
   */
  sqlDataList: Array<any> = [];

  /**
   * 基础统计模态  打开|关闭
   * @type {boolean}
   */
  opened: boolean = false;

  /**
   * 当前SQL对象
   * @type {{}}
   */
  currentSqlObj: any = {};

  constructor(private basicReportService: BasicReportService) {
  }

  ngOnInit(): void {
    this.getSqlList();
  }

  getSqlList() {
    this.basicReportService.getSqlDataList().subscribe(res=> {
      this.sqlDataList = res.json();
    });
  }

  /**
   * 执行sql详情查询
   * @param data
   */
  execute(data: any) {
    this.opened = !this.opened;
    this.currentSqlObj = data;
  }

}