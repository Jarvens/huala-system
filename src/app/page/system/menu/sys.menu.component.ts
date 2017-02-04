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
  //当前菜单对象
  currentMenuObj: any = {};
  //prompt提示信息
  promptMessage: string = '确定要删除吗?';
  //prompt 打开|关闭
  notificationOpen: boolean = false;
  //toast类型
  toastType: string = 'success';
  //toastMessage 提示信息
  toastMessage: string = '';
  //tosat 打开|关闭
  showAlert: boolean = false;




  //打开子菜单
  openChildMenu(menu: any) {
    if (this.currentMenuId === menu.id) {
      this.currentMenuId = "";
    } else {
      this.currentMenuId = menu.id;
    }
  }

  //子菜单点击事件
  getCurrentMenu(menu: any) {
    this.currentMenuObj = (<any>Object).assign({}, menu);
  }

  //清除事件
  clearMenu() {
    this.currentMenuObj = {};
  }

  //删除菜单
  deleteMenu() {
    console.log(this.currentMenuObj);
    if (!this.currentMenuObj.id) {
      this.toastType = 'info';
      this.toastMessage = '请选择需要删除的菜单';
      this.showAlert = !this.showAlert;
      return;
    }
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确定事件
  confirm() {
    this.sysMenuService.deleteMenu(this.currentMenuObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.toastMessage = '删除成功';
        this.showAlert = !this.showAlert;
        this.toastType = 'success';
        this.currentMenuObj = {};
        this.notificationOpen = !this.notificationOpen;
      } else {
        this.toastType = 'error';
        this.toastMessage = ret.message;
        this.showAlert = !this.showAlert;
      }
    });
  }

  //toast通知事件
  notifyParamFunction(event:boolean) {
    this.showAlert = event;
  }


  //编辑菜单
  editMenu() {
    this.sysMenuService.editMenu(this.currentMenuObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.showAlert = !this.showAlert;
        this.toastMessage = '保存成功';
        this.toastType = 'success';
      } else {
        this.showAlert = !this.showAlert;
        this.toastType = 'error';
        this.toastMessage = ret.message;
      }
    });
  }
}