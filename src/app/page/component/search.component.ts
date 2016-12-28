import {Component, EventEmitter, OnInit,Output, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
/**
 *
 * 搜索栏
 * V1.0
 *
 */
@Component({
    selector: 'search-component',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{
    ngOnInit(): void {
    }
    //搜索关键字
    @Output() searchKey = new EventEmitter<string>();
    //搜索范围
    @Output() selectScope = new EventEmitter<any>();
    //是否显示搜索icon
    @Input() showIcon: boolean = true;
    //延迟时间 2000毫秒
    @Input() debounce: number;
    //
    @Input() placeHolder: string = '';
    value: string = '';
    //条件过滤数组
    scopes = [{value: '全部', icon: 'groups', type: '0'}, {value: '所属人', icon: 'user', type: '1'}];
    //默认选项
    scope = this.scopes[0];
    //搜索方法
    lookupAsync = (query?: string): Observable<any[]> => {
        // if(!query) {
        // 	return null;
        // }

        //向上溢出
        this.searchKey.emit(query);
        return null;
    }

    //选项改变事件
    scopeChange(event) {
        this.selectScope.emit(event);
    }
}