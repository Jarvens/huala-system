import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../../service/role.service';
@Component({
  selector: 'role-component',
  templateUrl: './role.component.html'
})
export class RoleCOmponent implements OnInit {

  /**
   * 角色列表
   * @type {{}}
   */
  roleList: any = {};
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  /**
   * 搜索提示
   * @type {string}
   */
  placeholder: string = '搜索..名称';
  /**
   * prompt提示消息
   * @type {string}
   */
  promptMessage: string = '您确定要删除该角色吗?';
  /**
   * prompt 打开|关闭
   * @type {boolean}
   */
  notificationOpen: boolean = false;
  /**
   * toast 打开|关闭
   * @type {boolean}
   */
  showAlert: boolean = false;
  /**
   * toast 类型
   * @type {string}
   */
  toastType: string = 'success';
  /**
   * toast消息提示
   * @type {string}
   */
  toastMessage: string = '';
  /**
   * 操作对象
   * @type {{}}
   */
  operaObj: any = {};
  /**
   * 授权模态  打开|关闭
   * @type {boolean}
   */
  authorOpen: boolean = false;

  /**
   * 新增角色  打开|关闭
   * @type {boolean}
   */
  roleModalOpened: boolean = false;

  /**
   * 搜索关键字
   * @type {string}
   */
  key: string = '';

  /**
   * 创建角色对象
   * @type {{}}
   */
  roleObj: any = {};

  /**
   * 左侧容器
   * @type {Set<any>}
   */
  leftContainer = new Set<any>();

  /**
   * 右侧容器
   * @type {Set<any>}
   */
  rightContainer = new Set<any>();

  /**
   * 角色 权限集合 {包含拥有菜单 以及所有菜单}
   * @type {{}}
   */
  authorizationMapResullt: any = {};

  ngOnInit(): void {
    this.queryRoleList(this.key, this.pageOpts);
  }

  constructor(private roleService: RoleService) {
  }

  /**
   * 查询角色列表
   * @param key
   * @param page
   */
  queryRoleList(key: string, page: any) {
    this.roleService.getRoleList(key, page).subscribe(res=> {
      this.roleList = res.json();
    });
  }

  /**
   * 分页事件
   * @param event
   */
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.queryRoleList(this.key, this.pageOpts);
  }

  /**
   * 角色详情
   */
  roleDetail() {

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

  }

  /**
   * toast传播事件
   * @param event
   */
  notifyParamFunction(event: boolean) {
    this.showAlert = event;
  }

  /**
   * 删除按钮
   * @param data
   */
  delete(data: any) {
    this.notificationOpen = !this.notificationOpen;
    this.operaObj = data;
  }

  /**
   * 授权按钮
   */
  grantAuthorization(data: any) {
    this.operaObj = data;
    this.roleService.getAuthorization(data.id).subscribe(res=> {
      this.authorizationMapResullt = res.json();
      this.convertListToSet(this.authorizationMapResullt.menuList, this.leftContainer);
      this.convertListToSet(this.authorizationMapResullt.authorizationMenu, this.rightContainer);
    });
    this.authorOpen = !this.authorOpen;
  }

  /**
   * 搜索方法
   * @param data
   */
  searchByCondition(data: string) {
    this.key = data;
    this.queryRoleList(this.key, this.pageOpts);
  }

  /**
   * 新增角色
   */
  createRole() {
    this.roleModalOpened = !this.roleModalOpened;
    this.roleService.createRole(this.roleObj).subscribe(res=> {
      let result = res.json();
      if (result.success) {
        this.toastFunction('新增角色成功', 'success');
        this.queryRoleList(this.key, this.pageOpts);
      } else {
        this.toastFunction(result.message, 'error');
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

  /**
   * Set转List
   * @param data
   */
  convertSetToList(source: Set<any>) {
    let array: any = [];
    this.rightContainer.forEach(function (obj: any) {
      array.push(obj);
    });
    this.authorizationMapResullt.authorizationMenu = arry;
  }

  /**
   * List转换Set
   * @param source
   * @param target
   */
  convertListToSet(source: Array<any>, target: Set<any>) {
    source.forEach(function (obj: any) {
      target.add(obj);
    });
  }

  /**
   * 将权限从拥有权限Set集合移除
   */
  pullLeft() {

  }

  /**
   * 将权限从所有权限Set集合 添加到有用权限Set集合
   */
  pullRight() {

  }

}