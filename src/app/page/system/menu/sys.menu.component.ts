import {Component, OnInit} from '@angular/core';
import {SysMenuService} from '../../../service/sys.menu.service';
@Component({
  selector: 'sys-menu-component',
  templateUrl: './sys.menu.component.html'
})

export class SysMenuComponent implements OnInit {
  ngOnInit(): void {
    this.sysMenuService.getMenuList().subscribe(res=> {
      this.sysMenuList = res.json();
    });
  }

  constructor(private sysMenuService: SysMenuService) {
  }

  //菜单列表
  sysMenuList: Array<any> = [];
  //显示  *
  required: boolean = true;



}