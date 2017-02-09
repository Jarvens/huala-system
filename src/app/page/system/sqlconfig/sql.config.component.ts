import {Component, OnInit} from '@angular/core';
import {SqlConfigService} from '../../../service/sql.config.service';
@Component({
  selector: 'sql-config-component',
  templateUrl: './sql.config.component.html'
})
export class SqlConfigComponent implements OnInit {

  /**
   * sql集合
   * @type {{}}
   */
  sqlDataList: any = {};
  /**
   * 搜索关键字
   * @type {string}
   */
  key: string = '';
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};

  ngOnInit(): void {
  }

  constructor(private sqlConfigService: SqlConfigService) {
  }

}