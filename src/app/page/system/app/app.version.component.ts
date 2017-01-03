import {Component,ChangeDetectorRef,OnInit} from '@angular/core';
import {AppService} from '../../../service/app.version.service';
@Component({
    selector:'app-component',
    templateUrl:'app.version.component.html'
})

export class AppVersionComponent implements OnInit{
    constructor(private appService:AppService, private cdr:ChangeDetectorRef){}
    ngOnInit(): void {
    }



}