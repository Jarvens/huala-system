import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../../service/role.service';
@Component({
  selector: 'role-component',
  templateUrl: './role.component.html'
})
export class RoleCOmponent implements OnInit {

  //角色列表
  roleList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //搜索提示
  placeholder: string = '搜索..名称';
  //prompt提示消息
  promptMessage: string = '您确定要删除该角色吗?';
  //prompt 打开|关闭
  notificationOpen: boolean = false;
  //toast 打开|关闭
  showAlert: boolean = false;
  //toast 类型
  toastType: string = 'success';
  //toast消息提示
  toastMessage: string = '';
  //操作对象
  operaObj: any = {};
  //授权模态  打开|关闭
  authorOpen: boolean = false;


  ngOnInit(): void {
    this.queryRoleList('', this.pageOpts);
  }

  constructor(private roleService: RoleService) {
  }

  //查询角色列表
  queryRoleList(key: string, page: any) {
    this.roleService.getRoleList(key, page).subscribe(res=> {
      this.roleList = res.json();
    });
  }

  //分页事件
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.queryRoleList('', this.pageOpts);
  }

  //角色详情
  roleDetail() {

  }

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确定事件
  confirm() {

  }

  //toast传播事件
  notifyParamFunction(event:boolean) {
    this.showAlert = event;
  }

  //删除按钮
  delete(data: any) {
    this.notificationOpen = !this.notificationOpen;
    this.operaObj = data;
  }

  //授权按钮
  grantAuthorization() {
    this.authorOpen = !this.authorOpen;
  }

  //搜索方法
  searchByCondition(data: any) {

  }

  //新增
  add(){

  }


}