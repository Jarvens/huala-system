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

  /**
   * 菜单列表
   * @type {Array}
   */
  sysMenuList: Array<any> = [];
  /**
   * 显示  *
   * @type {boolean}
   */
  required: boolean = true;
  /**
   * 当前菜单ID
   * @type {string}
   */
  currentMenuId: string = '';
  /**
   * 当前菜单对象
   * @type {{}}
   */
  currentMenuObj: any = {};
  /**
   * prompt提示信息
   * @type {string}
   */
  promptMessage: string = '确定要删除吗?';
  /**
   * prompt 打开|关闭
   * @type {boolean}
   */
  notificationOpen: boolean = false;
  /**
   * toast类型
   * @type {string}
   */
  toastType: string = 'success';
  /**
   * toastMessage 提示信息
   * @type {string}
   */
  toastMessage: string = '';
  /**
   * tosat 打开|关闭
   * @type {boolean}
   */
  showAlert: boolean = false;




  /**
   * 打开子菜单
   * @param menu
   */
  openChildMenu(menu: any) {
    if (this.currentMenuId === menu.id) {
      this.currentMenuId = "";
    } else {
      this.currentMenuId = menu.id;
    }
  }

  /**
   * 子菜单点击事件
   * @param menu
   */
  getCurrentMenu(menu: any) {
    this.currentMenuObj = (<any>Object).assign({}, menu);
  }

  /**
   * 清除事件
   */
  clearMenu() {
    this.currentMenuObj = {};
  }

  /**
   * 删除菜单
   */
  deleteMenu() {
    if (!this.currentMenuObj.id) {
      this.toastFunction('请选择需要删除的菜单', 'info');
      return;
    }
    this.notificationOpen = !this.notificationOpen;
  }

  /**
   * prompt取消事件
   */
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  /**
   * prompt确定事件
   */
  confirm() {
    this.sysMenuService.deleteMenu(this.currentMenuObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.toastFunction('删除成功', 'success');
        this.currentMenuObj = {};
        this.notificationOpen = !this.notificationOpen;
      } else {
        this.toastFunction(ret.message, 'error');
      }
    });
  }

  /**
   * toast通知事件
   * @param event
   */
  notifyParamFunction(event: boolean) {
    this.showAlert = event;
  }


  /**
   * 编辑菜单
   */
  editMenu() {
    this.sysMenuService.editMenu(this.currentMenuObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.toastFunction('保存成功', 'success');
      } else {
        this.toastFunction(ret.message, 'error');
      }
    });
  }


  /**
   * toast函数
   * @param message
   * @param toastType
   */
  toastFunction(message: string, toastType: string) {
    this.showAlert = !this.showAlert;
    this.toastMessage = message;
    this.toastType = toastType;
  }
}