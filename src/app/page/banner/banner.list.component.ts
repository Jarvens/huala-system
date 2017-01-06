import {Component, OnInit} from '@angular/core';
import {BannerService} from '../../service/banner.service';
@Component({
  selector: 'banner-list-component',
  templateUrl: 'banner.list.component.html'
})

export class BannerListComponent implements OnInit {
  //banner列表对象
  bannerList: any = {};
  //分页对象
  pageOpts: any = {page:1,total: 0, limit: 3, perPage: 10}
  //图片地址前缀
  commonImgUrl = process.env.ImgUrl;
  //搜索关键词
  searchKey: string = '';
  //是否展示提示信息
  showAlert: boolean = false;
  value: string;
  placeholder: string = '搜索    名称';
  //删除标记默认为false
  delFlag: boolean = false;

  constructor(private bannerService: BannerService) {
  }

  ngOnInit(): void {
    this.getBannerList(null, this.searchKey);
  }

  //分页事件
  pageChange(event) {
    this.pageOpts.page = event;
    this.getBannerList(this.pageOpts, this.searchKey);
  }

  //获取banner列表
  getBannerList(page: any, searchKey: string) {
    this.bannerService.getBannerList(page, searchKey).subscribe(res=> {
      this.bannerList = res.json();
    });
  }

  //打开Toasth
  show() {
    this.showAlert = true;
  }

  //关闭Toast
  onClose(reason: string) {
    this.showAlert = false;
  }

  //搜索方法
  searchByCondition(event) {
    this.searchKey = event;
    this.getBannerList(this.pageOpts, this.searchKey);
  }

  //删除提示
  delConfirm(event) {
    this.delFlag = !this.delFlag;
    console.log(this.delFlag);
  }

}