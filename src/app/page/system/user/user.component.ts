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
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10}
  //搜索提示
  placeholder: string = '搜索..';
  //显示&隐藏用户新增模态
  opened: boolean = false;
  //显示&隐藏错误星标
  required: boolean = true;
  //操作对象
  operaObj: any = {};
  //prompt提示信息
  promptMessage: string = '';
  //prompt 打开|关闭
  notificationOpen: boolean = false;
  //toast类型
  toastType: string = 'success';
  //toast提示信息
  toastMessage: string = '';
  //toast打开|关闭
  showAlert: boolean = false;
  //confirm类型
  confirmType: string = '';

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
    this.operaObj = {};
  }

  //创建用户模态取消事件
  cancel() {
    this.opened = !this.opened;
  }

  //保存用户
  saveUser() {

  }

  //密码重置
  reset(data: any) {
    this.operaObj = data;
    this.notificationOpen = !this.notificationOpen;
    this.promptMessage = '您确定要重置吗?';
    this.confirmType = 'reset';
  }

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确定事件
  confirm() {
    if (this.confirmType == 'delete') {
      this.confirmDelete();
    }
    if (this.confirmType == 'reset') {
      this.confirmReset();
    }
  }

  //toast传递事件
  notifyParamFunction(event: boolean) {
    this.showAlert = event;
  }

  //删除用户
  deleteUser(data: any) {
    this.notificationOpen = !this.notificationOpen;
    this.promptMessage = '您确定要删除该用户吗?';
    this.confirmType = 'delete';
    this.operaObj = data;
  }



  confirmDelete() {
    this.userService.deleteUser(this.operaObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.showAlert = !this.showAlert;
        this.toastMessage = '删除成功';
        this.notificationOpen = !this.notificationOpen;
        this.getUserList(null, this.pageOpts);
      } else {
        this.showAlert = !this.showAlert;
        this.toastMessage = ret.message;
        this.toastType = 'error';
        this.notificationOpen = !this.notificationOpen;
      }
    });
  }

  confirmReset() {
    this.userService.resetPassword(this.operaObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.showAlert = !this.showAlert;
        this.toastMessage = '密码重置成功';
        this.notificationOpen = !this.notificationOpen;
      } else {
        this.showAlert = !this.showAlert;
        this.toastMessage = ret.message;
        this.toastType = 'error';
        this.notificationOpen = !this.notificationOpen;
      }
    });
  }

  //编辑用户信息
  edit(data: any) {
    this.operaObj = data;
    this.opened = !this.opened;
  }

}