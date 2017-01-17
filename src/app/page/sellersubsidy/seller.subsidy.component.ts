import {Component, OnInit} from '@angular/core';
import {SellerSubsidyService} from '../../service/seller.subsidy.service';
@Component({
  selector: 'seller-subsidy-component',
  templateUrl: './seller.subsidy.component.html'
})
export class SellerSubsidyComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private sellerSubsidyService: SellerSubsidyService) {
  }

  //tips  打开|关闭
  open: boolean = false;
  //奖励数据对象
  rewardList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}
  //toast类型
  toastType: string = 'success';
  //toast提示信息
  toastMessage: string = '';
  //toast 打开|关闭
  showAlert: boolean = false;
  //prompt消息
  promptMessage: string = '';
  //prompt 打开|关闭
  notificationOpen: boolean = false;
  //查询时间
  queryDate: string = '';
  //格式化
  date_formate: string = 'yyyy-mm-dd';
  //初始化奖励数据
  initData() {
    if (this.queryDate == '') {
      this.showAlert = !this.showAlert;
      this.toastMessage = '请选择生成日期';
      this.toastType = 'warning';
      return;
    }
    this.sellerSubsidyService.initData(this.queryDate).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.showAlert = !this.showAlert;
        this.toastType = 'success';
        this.toastMessage = '奖励数据生成成功';
        this.queryRewardList(this.queryDate, this.pageOpts);
      } else {
        this.showAlert = !this.showAlert;
        this.toastMessage = ret.message;
        this.toastType = 'error';
      }
    });
  }

  //分页事件
  pageChange(event) {
    this.pageOpts.page = event;
    this.queryRewardList(this.queryDate, this.pageOpts);
  }

  //时间选择事件
  receiveDate(event: any) {
    this.queryDate = event;
    this.queryRewardList(event, this.pageOpts);
  }

  //toast事件传递
  notifyParamFunction() {
    this.showAlert = !this.showAlert;
  }

  //prompt取消事件
  cancelPrompt() {

  }

  //prompt确定事件
  confirm() {

  }

  //查询奖励列表
  queryRewardList(date: string, page: any) {
    this.sellerSubsidyService.getRewardList(date, page).subscribe(res=> {
      this.rewardList = res.json();
    });
  }

}