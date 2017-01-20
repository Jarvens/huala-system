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


}