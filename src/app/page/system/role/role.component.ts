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

  ngOnInit(): void {
  }

  constructor(private roleService: RoleService) {
  }



}