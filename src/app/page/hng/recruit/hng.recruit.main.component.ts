import {Component, OnInit} from '@angular/core';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-recruit-main-component',
  templateUrl: './hng.recruit.main.component.html'
})

export class HngRecruitMainComponent implements OnInit {

  //招聘信息列表对象
  hngRecruitDataList: any = {};

  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //查询条件对象
  conditions: any = {};

  constructor(private hngService: HngService) {
  }

  ngOnInit(): void {
    this.querySellerDataByBtn();
  }

  //分页事件
  pageChange(event) {
    this.pageOpts.page = event;
  }

  querySellerDataByBtn() {
    this.hngService.getRecruitData(this.pageOpts, this.conditions).subscribe(res=> {
      this.hngRecruitDataList = res.json();
    });
  }

  exportExcel() {

  }


}