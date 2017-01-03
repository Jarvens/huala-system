import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  token: string = '';
  user: any = {};
  //Toast提示
  toastMessage: string = '';
  //类型
  toastType: string = 'error';
  //显示|关闭toast
  showAlert: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.token = window.localStorage.getItem("hl-token");
    if (!this.token) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/index/chart']);
    }
  }

  //登录
  login() {
    this.loginService.login(this.user).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        window.localStorage.setItem("hl-token", ret.token);
        this.router.navigate(['/index/chart']);
      } else {
        this.toastMessage = ret.message;
        this.showAlert = !this.showAlert;
        this.toastType = 'error';
      }
    });
  }

}