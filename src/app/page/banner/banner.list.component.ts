import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {INglDatatableSort, INglDatatableRowClick} from 'ng-lightning/ng-lightning';
import {BannerService} from '../../service/banner.service';
import {Observable} from 'rxjs/Observable';
@Component({
    selector: 'banner-list-component',
    templateUrl: 'banner.list.component.html'
})

export class BannerListComponent implements OnInit {
    //banner列表对象
    bannerList: any = {};
    //分页对象
    pageOpts: any = {total: 0, limit: 3, perPage: 10}
    //图片地址前缀
    commonImgUrl = process.env.ImgUrl;
    //搜索关键词
    searchKey: string = '';
    //是否展示提示信息
    showAlert: boolean = false;
    value: string;
    placeholder: string = '搜索    名称';
    
    constructor(private bannerService: BannerService, private cdr: ChangeDetectorRef) {
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
            this.cdr.detectChanges();
        });
    }
    
    //打开Toasth
    show() {
        this.showAlert = true;
    }
    
    //Table点击事件
    onRowClick($event: INglDatatableRowClick) {
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
}