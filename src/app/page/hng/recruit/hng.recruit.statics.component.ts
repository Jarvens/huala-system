import {Component, OnInit} from '@angular/core';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-recruit-statics-component',
  templateUrl: './hng.recruit.statics.component.html'
})

export class HngRecruitStaticsComponent implements OnInit {

  /**
   * 公司数据
   * @type {Array}
   */
  companyDataList: Array<any> = [];

  /**
   * 岗位数据
   * @type {Array}
   */
  jobDataList: Array<any> = [];

  /**
   * 搜索条件
   * @type {{}}
   */
  conditions: any = {};

  placeholder: string = '店铺id..店铺名称';

  constructor(private hngService: HngService) {
  }

  ngOnInit(): void {
    this.hngService.getAllCompany().subscribe(res=> {
      this.companyDataList = res.json().body;
    });

    this.hngService.getAllJob().subscribe(res=> {
      this.jobDataList = res.json().body;
    });
  }

  /**
   * 条件搜索
   * @param data
   */
  querySellerDataByBtn(data: string) {

  }

  /**
   * excel导出
   */
  exportExcel() {

  }

}