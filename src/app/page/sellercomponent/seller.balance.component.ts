import {Component, Input, OnChanges} from '@angular/core';
import {SellerService} from '../../service/seller.service';
@Component({
  selector: 'seller-balance-component',
  templateUrl: './seller.balance.component.html'
})

export class SellerBalanceComponent implements OnChanges {
  /**
   * 当前店铺
   * @type {{}}
   */
  @Input() currentSeller: any = {};

  /**
   * 结算信息集合
   * @type {Array}
   */
  balanceData: any = {};

  /**
   * 结算详情
   * @type {{}}
   */
  balanceDataList: any = {};

  /**
   * 分页
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};

  /**
   * 结算类型
   * @type {string}
   */
  key: string = 'all';

  /**
   * prompt提示消息
   * @type {string}
   */
  promptMessage: string = '您确定要进行结算吗?';

  /**
   * prompt打开|关闭
   * @type {boolean}
   */
  notificationOpen: boolean = false;

  /**
   * toast类型
   * @type {string}
   */
  toastType: string = 'success';

  /**
   * toast提示消息
   * @type {string}
   */
  toastMessage: string = '';

  /**
   * 打开|关闭 toast
   * @type {boolean}
   */
  showAlert: boolean = false;

  /**
   * 当前操作结算对象
   * @type {{}}
   */
  operaBalanceObj: any = {};

  /**
   * 账户调整  打开|关闭
   * @type {boolean}
   */
  adjustOpened: boolean = false;

  /**
   * 调整对象
   * @type {{}}
   */
  adjustObj: any = {};

  constructor(private sellerService: SellerService) {
  }

  /**
   * 监听当前店铺变化信息
   * @param changes
   */
  ngOnChanges(changes: any): void {
    let value: any = changes['currentSeller'];
    if (!value) {
      return;
    }
    if (value.currentValue.id != value.previousValue.id) {
      let id = this.currentSeller.id;
      this.getSellerBalanceData(id);
      this.getSellerBalanceDataList(this.pageOpts, id, this.key);
    }
  }

  /**
   * 根据店铺id  查询店铺结算信息
   * @param id
   */
  getSellerBalanceData(id: number) {
    this.sellerService.getSellerBalance(id).subscribe(res=> {
      this.balanceData = res.json().body;
    });
  }

  /**
   * 根据店铺id 查询  结算列表详情
   * @param page
   * @param id
   * @param type
   */
  getSellerBalanceDataList(page: any, id: number, type: string) {
    this.sellerService.getBalanceDataList(page, id, type).subscribe(res=> {
      this.balanceDataList = res.json();
    });
  }

  /**
   * 发送结算信息
   * @param data
   */
  sendBalance(data: any) {
    this.notificationOpen = !this.notificationOpen;
    this.operaBalanceObj = data;
  }

  /**
   * 分页
   * @param data
   */
  pageChange(data: number) {
    this.pageOpts.page = data;
  }

  /**
   * 查询按钮事件
   */
  search() {
    this.getSellerBalanceDataList(this.pageOpts, this.currentSeller.id, this.key);
  }

  /**
   * 账户调整
   */
  adjustmentAccount() {
    this.adjustOpened = !this.adjustOpened;
  }

  /**
   * prompt取消事件
   */
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  /**
   * prompt确认事件
   */
  confirm() {
    this.notificationOpen = !this.notificationOpen;
    this.sellerService.sendBalance(this.operaBalanceObj).subscribe(res=> {
      let result = res.json();
      if (result.success) {
        this.toastFunction('发送成功', 'success');
      } else {
        this.toastFunction(result.message, 'error');
      }
    });
  }

  /**
   * toast传播事件
   * @param data
   */
  notifyParamFunction(data: boolean) {
    this.showAlert = !this.showAlert;
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


  /**
   * 关闭 调整窗口
   */
  closeAdjustModal() {
    this.adjustOpened = !this.adjustOpened;
  }

  /**
   * 保存调整信息
   */
  saveAdjust() {
    this.adjustObj.sellerId=this.currentSeller.id;
    if(!this.adjustObj.type){
      this.toastFunction('请选择调整类型','info');
      return;
    }
    if(!this.adjustObj.amount){
      this.toastFunction('请填写调整金额','info');
      return ;
    }
    this.sellerService.adjustmentAccount(this.adjustObj).subscribe(res=>{
      let result = res.json();
      if(result.success){
        this.toastFunction('调整成功','success');
        this.adjustOpened =!this.adjustOpened;
      }else{
        this.toastFunction(result.message,'error');
      }
    });
  }
}