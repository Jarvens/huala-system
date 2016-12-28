import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'index-component',
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
    currentMenu: Array<string> = [];

    ngOnInit(): void {
    }

}