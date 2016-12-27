import {Component} from '@angular/core';
@Component({
	selector: 'banner-entry-component',
	templateUrl: './banner.entry.component.html'
})

export class BannerEntryComponent {
	//错误提示显示状态
	required: boolean = true;
	//
	showStartDate: boolean = false;
	showEndDate: boolean = false;
	startDate: Date = new Date();
	endDate: Date = new Date();
	monthNames: Array<string> = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
	dayNamesShort: Array<string> = ['日', '一', '二', '三', '四', '五', '六',];

	//开始时间change事件
	startDateChange (event: any) {
		this.showStartDate = !this.showStartDate;
	}

	//结束时间change事件
	endDateChange (event: Date) {
		this.showEndDate = !this.showEndDate;
	}

	//parseDate (date: Date) {
	//	let year = date.getFullYear();
	//	let month = date.getMonth() + 1;
	//	month = month < 10 ? '0' + month : month;
	//	let day = date.getDate();
	//	day = day < 10 ? ('0' + day) : day;
	//	return year + '-' + month + '-' + day;
	//}
}