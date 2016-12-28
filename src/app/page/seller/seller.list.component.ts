import {Component, OnInit} from '@angular/core';
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
	//全部   所属人
	keyType: string = '';

	ngOnInit (): void {
	}

	constructor (private sellerService: SellerService) {
	}

	//打开Toast
	show () {
		this.showAlert = true;
	}

	//Table点击事件
	onRowClick ($event: INglDatatableRowClick) {
		console.log($event);
	}

	//关闭Toast
	onClose (reason: string) {

		this.showAlert = false;
	}

	//搜索方法
	searchByCondition (event) {
		console.log("搜索关键字:" + event);
	}

	//下拉选项参数
	selectScope (event:any) {

		console.log("打印选项");
		console.log(event.type);
	}
}