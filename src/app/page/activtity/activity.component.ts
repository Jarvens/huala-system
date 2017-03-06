import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../service/activity.service';
@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html'
})

export class ActivityComponent implements OnInit {

  /**
   * 活动列表
   * @type {{}}
   */
  activities: any = {};

  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}

  goodsPageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};

  /**
   * 活动商品列表
   * @type {{}}
   */
  activityGoods: any = {};

  constructor(private activityService: ActivityService) {
  }


  ngOnInit(): void {

  }

  /**
   * 活动商品分页
   * @param data
   */
  activityGoodsPageChange(data: number) {

  }

  /**
   * 活动列表 分页
   * @param data
   */
  pageChange(data: number) {

  }
}