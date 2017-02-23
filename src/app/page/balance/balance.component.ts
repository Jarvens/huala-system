import {Component, OnInit} from '@angular/core';
import {BalanceService} from '../../service/balance.service';
import {ToastMessage} from '../../domain/prompt.enum';
@Component({
  selector: 'balance-component',
  templateUrl: './balance.component.html'
})

export class BalanceComponent implements OnInit {

  //结算列表对象
  balanceList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}
  //模态分页对象
  modalPageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //模态打开|关闭
  opened: boolean = false;
  //结算详情列表
  balanceDetailList: any = {};
  //结算详情列表查询条件
  detailQueryOpts: any = {};
  //结算详情模态title
  header: string = '';
  //提示框 打开|关闭
  notificationOpen: boolean = false;
  //提示框 提示信息
  promptMessage: string = ToastMessage.Balance;
  //结算对象
  settleMentObject: any = {};
  //Toast提示
  toastMessage: string = '';
  //类型
  toastType: string = 'error';
  //显示|关闭toast
  showAlert: boolean = false;

  constructor(private balanceService: BalanceService) {
  }

  ngOnInit(): void {
    this.getBalanceList(null);
  }

  //结算列表
  getBalanceList(page: any) {
    this.balanceService.getBalanceList(page).subscribe(res=> {
      this.balanceList = res.json();
    });
  }

  //分页
  pageChange(event) {
    this.pageOpts.page = event;
    this.getBalanceList(this.pageOpts);
  }

  //结算详情列表
  getBalanceDetail(data: any, balanceType: string, title: string) {
    this.detailQueryOpts.date = data.date;
    this.detailQueryOpts.title = title;
    this.detailQueryOpts.balanceType = balanceType;
    this.header = title;
    this.balanceService.getBalanceDetailList(this.modalPageOpts, data.date, balanceType).subscribe(res=> {
      this.balanceDetailList = res.json();
    });
    this.opened = !this.opened;
  }

  //条件搜索
  searchByCondition(event) {

  }

  //结算详情列表分页
  modalPageChanges(event) {
    this.modalPageOpts.page = event;
    this.balanceService.getBalanceDetailList(this.modalPageOpts, this.detailQueryOpts.date,
      this.detailQueryOpts.balanceType).subscribe(res=> {
      this.balanceDetailList = res.json();
    });
  }

  //结算按钮
  settleMent(data: any) {
    this.notificationOpen = !this.notificationOpen;
    this.settleMentObject = data;
  }

  //prompt取消
  cancel() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确定
  confirm() {
    this.notificationOpen = !this.notificationOpen;
    this.goSettleMent();
  }

  //关闭按钮触发
  openChange(event) {
    this.balanceDetailList = {};
  }

  //去结算
  goSettleMent() {
    this.balanceService.goSettleMent(this.settleMentObject).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.toastType = 'success';
        this.toastMessage = ret.message;
        this.showAlert = !this.showAlert;
      } else {
        this.toastType = 'error';
        this.toastMessage = ret.message;
        this.showAlert = !this.showAlert;
      }
    });
  }

  //通知Toast状态
  notifyParamFunction(event) {
    this.showAlert = event;
  }

}