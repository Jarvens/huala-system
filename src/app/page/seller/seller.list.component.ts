import {Component, OnInit} from '@angular/core';
import {SellerService} from '../../service/seller.service';
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

	ngOnInit (): void {
	}

	constructor (private sellerService:SellerService) {
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
	lookupAsync () {
		console.log("搜索关键字：" + this.searchKey);
	}
}