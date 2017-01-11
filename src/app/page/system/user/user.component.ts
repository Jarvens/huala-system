import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {UserService} from '../../../service/user.service';
@Component({
  selector: 'user-component',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

  //搜索条件
  key: string = '';
  //用户列表对象
  userList: any = {};
  //分页对象
  pageOpts: any = {page:1,total: 0, limit: 3, perPage: 10}
  placeholder: string = '这是搜索提示';
  //显示&隐藏用户新增模态
  opened: boolean = false;
  //显示&隐藏错误星标
  required: boolean = true;

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getUserList(null, this.key);
  }

  //查询用户列表
  getUserList(page: any, key: string) {
    this.userService.getUserList(page, key).subscribe(res=> {
      this.userList = res.json();
    });
  }

  //row点击事件
  onRowClick(event) {

  }

  //排序事件
  onSort(event) {

  }

  //条件搜索
  searchByCondition(event) {
    this.key = event;
    this.getUserList(this.pageOpts, event);
  }

  //分页
  pageChange(event) {
    this.pageOpts.page = event;
    this.getUserList(this.pageOpts, this.key);
  }

  //打开创建用户modal
  openModal() {
    this.opened = !this.opened;
  }

  //创建用户模态取消事件
  cancel() {
    this.opened = !this.opened;
  }

  //保存用户
  saveUser(){

  }

}