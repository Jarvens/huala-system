import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-recruit-basic-component',
  templateUrl: './hng.recruit.basic.component.html'
})

export class HngRecruitBasicComponent implements OnInit {
  public wriInfoStatus: string = 'doing';
  public relativeSellerInfoStatus: string = 'will';
  public wriPublishTimeStatus: string = 'will';
  //显示|隐藏  *
  public required: boolean = true;
  //招聘模板id
  public recruitId: number = 0;
  //公司
  public companyListData: Array<any> = [];
  //岗位
  public jobListData: Array<any> = [];
  //操作对象
  public operaObj: any = {};
  //toast类型
  public toastType: string = 'success';
  //toast消息
  public toastMessage: string = '';
  //打开|关闭 toast
  public showAlert: boolean = false;

  ngOnInit(): void {
    this.hngService.getAllJob().subscribe(res=> {
      this.jobListData = res.json().body;
    });
    this.hngService.getAllCompany().subscribe(res=> {
      this.companyListData = res.json().body;
    });
    this.getParams();
  }

  constructor(private hngService: HngService, private router: ActivatedRoute) {
  }

  //保存数据
  saveData() {
    this.hngService.saveRecruitBasicData(this.operaObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.toastFunction(ret.message,'success');
        this.recruitId = ret.body;
      } else {
        this.toastFunction(ret.message,'error');
      }
    });
  }

  //toast传播事件
  notifyParamFunction(event: boolean) {
    this.showAlert = event;
  }

  //获取链接传递参数
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
    })
  }


  /**
   * toast函数
   * @param message
   * @param toastType
   */
  toastFunction(message: string, toastType: string) {
    this.showAlert = !this.showAlert;
    this.toastMessage = message;
    this.toastType = toastType;
  }

}