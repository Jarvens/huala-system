import {Component, OnInit,EventEmitter, Output} from '@angular/core';
import {SellerService} from '../../service/seller.service';
import {INglDatatableSort, INglDatatableRowClick} from 'ng-lightning/ng-lightning';
@Component({
  selector: 'seller-list-component',
  templateUrl: './seller.list.component.html'
})
export class SellerListComponent implements OnInit {
  /**
   * 店铺列表对象
   * @type {{}}
   */
  sellerList: any = {};
  /**
   * 分页对象
   * @type {{total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {total: 0, limit: 3, perPage: 10};
  /**
   * 是否展示提示信息
   * @type {boolean}
   */
  showAlert: boolean = false;
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
  placeholder: string = '搜索  ID  名称 手机号';
  @Output() sellerDetail = new EventEmitter<any>();
  @Output() showDetail = new EventEmitter<boolean>();

  constructor(private sellerService: SellerService) {
  }

  ngOnInit(): void {
    this.getSellerList(null, this.searchKey, '', this.keyType);
  }

  /**
   * 打开Toast
   */
  show() {
    this.showAlert = true;
  }

  /**
   * Table点击事件  并且向上传递seller对象
   * @param $event
   */
  onRowClick($event: INglDatatableRowClick) {
  }

  /**
   * 关闭Toast
   */
  onClose() {
    this.showAlert = false;
  }

  /**
   * 搜索方法
   * @param event
   */
  searchByCondition(event) {
    this.searchKey = event;
    this.getSellerList(this.pageOpts, this.searchKey, '', this.keyType);
  }

  /**
   * 下拉选项参数
   * @param event
   */
  selectScope(event: any) {
    this.keyType = event.type;
  }

  /**
   * 分页事件
   * @param event
   */
  pageChange(event) {
    this.pageOpts.page = event;
    this.getSellerList(this.pageOpts, this.searchKey, '', this.keyType);
  }

  /**
   * 获取店铺列表
   * @param page
   * @param searchKey
   * @param status
   * @param keyType
   */
  getSellerList(page: any, searchKey: string, status: string, keyType: string) {
    this.sellerService.getSellerList(page, searchKey, status, keyType).subscribe(res=> {
      this.sellerList = res.json();
    });
  }

  /**
   * 数据排序
   * @param event
   */
  onSort(event: INglDatatableSort) {

    /**
     *
     * event对象为
     * key:排序关键字
     * order:排序
     */
  }

  /**
   * 店铺详情 向上传递对象
   * @param value
   */
  sellerDetailInfo(value) {
    this.sellerDetail.emit(value);
    this.showDetail.emit(true);
  }
}