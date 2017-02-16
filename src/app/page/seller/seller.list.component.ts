import {Component, OnInit, Input} from '@angular/core';
import {SellerService} from '../../service/seller.service';
@Component({
  selector: 'seller-list-component',
  templateUrl: './seller.list.component.html'
})

export class SellerListComponent implements OnInit {
  /**
   * 显示|隐藏  复选框
   * @type {boolean}
   */
  @Input() openCheckBox: boolean = true;
  /**
   * 显示|隐藏  搜索框选项图标
   * @type {boolean}
   */
  @Input() openConditionIcon: boolean = true;
  /**
   * 搜索延迟时间  毫秒
   * @type {number}
   */
  @Input() debounce: number = 2000;

  /**
   * 显示|隐藏 操作按钮
   * @type {boolean}
   */
  @Input() showBtn: boolean = true;

  @Input() status: string;

  /**
   * 审核模态 打开|关闭
   * @type {boolean}
   */
  authOpened: boolean = false;
  /**
   * 商家列表
   * @type {{}}
   */
  sellerList: any = {};
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  /**
   * 搜索关键字
   * @type {string}
   */
  searchKey: string = '';
  /**
   * 全部:0   所属人:1
   * @type {string}
   */
  keyType: string = '0';
  /**
   * 搜索提示
   * @type {string}
   */
  placeholder: string = '搜索  ID  名称 手机号';

  /**
   * 审核原因
   * @type {string}
   */
  reason: string = '';
  /**
   * 当前店铺
   * @type {{}}
   */
  currentSeller: any = {};

  /**
   * 默认商品
   * @type {boolean}
   */
  defaultGoods: boolean = true;

  toastType: string = 'success';
  toastMessage: string = '';
  showAlert: boolean = false;

  ngOnInit(): void {
    this.querySellerList(this.searchKey, this.pageOpts, this.status, this.keyType);
  }

  constructor(private sellerService: SellerService) {
  }

  /**
   * 查询商家列表
   * @param key
   * @param page
   * @param keyType
   */
  querySellerList(key: string, page: any, status: string, keyType: string) {
    this.sellerService.getSellerList(page, key, status, keyType).subscribe(res=> {
      this.sellerList = res.json();
    });
  }

  /**
   * 异步查询事件
   * @param data
   */
  searchByCondition(data: string) {
    this.searchKey = data;
    this.querySellerList(this.searchKey, this.pageOpts, this.status, this.keyType);
  }

  /**
   * 行点击事件
   * @param event
   */
  onRowClick(event: any) {

  }

  /**
   * 分页事件
   * @param event
   */
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.querySellerList(this.searchKey, this.pageOpts, this.status, this.keyType);
  }

  /**
   * 操作按钮事件
   * @param data
   */
  operator(data: any) {
    this.currentSeller = data;
    this.authOpened = !this.authOpened;
  }

  /**
   * 店铺审核
   * @param auth
   */
  authSeller(auth: string) {
    let data: any = {};
    data.id = this.currentSeller.id;
    data.sellerStatus = auth;
    data.desc = this.reason;
    data.sales = this.defaultGoods;
    this.sellerService.authSeller(data).subscribe(res=> {
      let result = res.json();
      if (result.success) {
        this.toastFunction('审核成功', 'success');
        this.authOpened = !this.authOpened;
        this.querySellerList(this.searchKey, this.pageOpts, this.status, this.keyType);
      } else {
        this.toastFunction(result.message, 'error');
      }
    });
  }

  /**
   * 默认商品  checkbox事件
   */
  uncheck() {
    this.defaultGoods = !this.defaultGoods;
  }

  /**
   * toast传播事件
   * @param data
   */
  notifyParamFunction(data: boolean) {
    this.showAlert = data;
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