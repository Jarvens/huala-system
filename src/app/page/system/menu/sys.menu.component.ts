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

  //当前菜单ID
  currentMenuId: string = '';

  //打开子菜单
  openChildMenu(menu: any) {
    if (this.currentMenuId === menu.id) {
      this.currentMenuId = "";
    } else {
      this.currentMenuId = menu.id;
    }
  }



}