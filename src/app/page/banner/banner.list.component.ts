import {Component, OnInit} from '@angular/core';
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

	ngOnInit (): void {
		this.bannerService.getBannerList(null, this.searchKey).subscribe(res=> {
			this.bannerList = res.json();
		});
	}

	constructor (private bannerService: BannerService) {
	}

	//分页事件
	pageChange (event) {
		this.pageOpts.page = event;
		this.bannerService.getBannerList(this.pageOpts, this.searchKey).subscribe(res=> {
			this.bannerList = res.json();
		});
	}

	//打开Toast
	show () {
		this.showAlert = true;
	}

	//Table点击事件
	onRowClick ($event: INglDatatableRowClick) {
	}

	//关闭Toast
	onClose (reason: string) {
		this.showAlert = false;
	}

	//搜索方法
	lookupAsync = (query: string): Observable<any[]> => {
		if(!query) {
			return null;
		}
		console.log("搜索关键字：" + query);
	}
}