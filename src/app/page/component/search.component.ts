import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
/**
 *
 * 搜索栏
 *
 */
@Component({
	selector: 'search-component',
	templateUrl: './search.component.html'
})
export class SearchComponent {
	@Output() searchKey = new EventEmitter<string>();
	//延迟时间 2000毫秒
	debounce: number = 2000;
	//是否显示搜索icon
	showIcon: boolean = true;
	//搜索方法
	lookupAsync = (query: string): Observable<any[]> => {
		if(!query) {
			return null;
		}
		//向上溢出
		this.searchKey.emit(query);
	}
}