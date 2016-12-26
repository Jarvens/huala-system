import {Component, OnInit} from '@angular/core';
import {INglDatatableSort, INglDatatableRowClick} from 'ng-lightning/ng-lightning';
import {BannerService} from '../../service/banner.service';
@Component({
	selector: 'banner-component',
	templateUrl: './banner.component.html'
})

export class BannerComponent implements OnInit {
	//banner列表对象
	bannerList: any = {};
	//分页对象
	pageOpts: any = {total: 0, limit: 3, perPage: 10}
	//图片地址前缀
	ImgUrl: string = window['ImgUrl'];
	//搜索关键词
	searchKey: string = '';
	//是否展示提示信息
	showAlert: boolean = false;

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

	show () {
		this.showAlert = true;
	}

	superhero: string = null;
	value: string = '';
	address = '';
	hero: string = null;

	superheroes = ['Hulk', 'Flash', 'Superman', 'Batman', 'Spiderman', 'Iron Man', 'Thor', 'Wolverine', 'Deadpool'];
	superheroeines = ['Catwoman', 'She-Hulk', 'Wonder Woman', 'Batwoman', 'Invisible Woman'];

	scopes = [
		{value: 'All', icon: 'groups'},
		{value: 'Men', icon: 'user'},
		{value: 'Women', icon: 'lead'},
	];

	scope = this.scopes[0];

	lookup = (query: string, source = this.superheroes): string[] => {
		if(!query) {
			return null;
		}

		return source.filter((d: string) => d.toLowerCase().indexOf(query.toLowerCase()) > -1);
	}

	// This function is now safe to pass around
	lookupAsync = (query: string): Observable<any[]> => {
		if(!query) {
			return null;
		}

		return this.http.get(`//maps.googleapis.com/maps/api/geocode/json?address=${query}`)
			.map((res: Response) => res.json())
			.map((response: any) => response.results);
	}

	lookupPolymorphic = (query: string): string[] => {
		let heroes: string[];
		if(this.scope.value === 'Men') {
			heroes = [...this.superheroes];
		} else if(this.scope.value === 'Women') {
			heroes = [...this.superheroeines];
		} else {
			heroes = [...this.superheroes, ...this.superheroeines];
		}

		return this.lookup(query, heroes);
	}

}