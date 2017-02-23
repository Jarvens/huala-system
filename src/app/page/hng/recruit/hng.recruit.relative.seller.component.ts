import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HngService} from '../../../service/hng.service';
import {_keyValueDiffersFactory} from "@angular/core/src/application_module";
@Component({
  selector: 'relative-seller',
  templateUrl: './hng.recruit.relative.seller.component.html'
})

export class RelativeSellerComponent implements OnInit {
  /**
   * 进度条显示状态
   * @type {string}
   */
  wriInfoStatus: string = 'complete';
  relativeSellerInfoStatus: string = 'doing';
  wriPublishTimeStatus: string = 'will';
  /**
   * 招聘id
   * @type {number}
   */
  recruitId: number = 0;
  /**
   * 当前招聘对象
   * @type {{}}
   */
  operaObj: any = {};

  ngOnInit(): void {
    this.getParams();
  }

  constructor(private router: ActivatedRoute, private hngService: HngService) {
  }

  /**
   * 选择店铺
   * @param data
   */
  relationSeller(data: any) {
    console.log('打印当前关联店铺 ->', data);
  }

  /**
   * 获取链接传递参数
   */
  getParams() {
    let that = this;
    this.router.params.forEach((params: Params)=> {
      let _value: number = +params['recruitId'];
      this.recruitId = _value;
      if (_value != 0) {
        that.hngService.getRecruitById(_value).subscribe(res=> {
          that.operaObj = res.json().body;
        });
      }
    });
  }
}