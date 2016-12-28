import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {SellerService} from '../../service/seller.service';
import {INglDatatableSort, INglDatatableRowClick} from 'ng-lightning/ng-lightning';
@Component({
  selector: 'seller-list-component',
  templateUrl: './seller.list.component.html'
})
export class SellerListComponent implements OnInit {
  //店铺列表对象
  sellerList: any = {};
  //分页对象
  pageOpts: any = {total: 0, limit: 3, perPage: 10};
  //是否展示提示信息
  showAlert: boolean = false;
  //搜索关键字
  searchKey: string = '';
  //全部:0   所属人:1
  keyType: string = '0';
  placeholder: string = '搜索  ID  名称 手机号';

  constructor(private sellerService: SellerService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSellerList(null, this.searchKey, '', this.keyType);
  }

  //打开Toast
  show() {
    this.showAlert = true;
  }

  //Table点击事件
  onRowClick($event: INglDatatableRowClick) {
    console.log($event);
  }

  //关闭Toast
  onClose(reason: string) {
    this.showAlert = false;
  }

  //搜索方法
  searchByCondition(event) {
    this.searchKey = event;
    this.getSellerList(this.pageOpts, this.searchKey, '', this.keyType);
  }

  //下拉选项参数
  selectScope(event: any) {
    this.keyType = event.type;
  }

  //分页事件
  pageChange(event) {
    this.pageOpts.page = event;
    this.getSellerList(this.pageOpts, this.searchKey, '', this.keyType);
  }

  //获取店铺列表
  getSellerList(page: any, searchKey: string, status: string, keyType: string) {
    this.sellerService.getSellerList(page, searchKey, status, keyType).subscribe(res=> {
      this.sellerList = res.json();
      this.cdr.detectChanges();
    });
  }

  //数据排序
  onSort(event) {

    /**
     *
     * event对象为
     * key:排序关键字
     * order:排序
     */
  }
}