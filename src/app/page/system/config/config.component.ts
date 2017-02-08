import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../../service/config.service';
@Component({
  selector: 'config-component',
  templateUrl: './config.component.html'
})

export class ConfigComponent implements OnInit {
  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.queryConfig(this.pageOpts, this.key);
  }

  /**
   * 配置对象列表
   * @type {{}}
   */
  configList: any = {};
  /**
   * 分页对象
   * @type {{page: number; total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  /**
   * 搜索关键字
   * @type {string}
   */
  key: string = '';
  /**
   * 搜搜提示
   * @type {string}
   */
  placeholder: string = '搜索..';
  /**
   * 配置项模态  打开|关闭
   * @type {boolean}
   */
  configOpen: boolean = false;
  /**
   * 编辑对象
   * @type {{}}
   */
  configEditObj: any = {};
  /**
   * prompt提示消息
   * @type {string}
   */
  promptMessage: string = '您确定要修改吗？';
  /**
   * prompt打开|关闭
   * @type {boolean}
   */
  notificationOpen: boolean = false;
  /**
   * toast类型
   * @type {string}
   */
  toastType: string = 'success';
  /**
   * toast消息
   * @type {string}
   */
  toastMessage: string = '编辑成功';
  /**
   * toast打开|关闭
   * @type {boolean}
   */
  showAlert: boolean = false;
  /**
   * 显示|隐藏  *
   * @type {boolean}
   */
  required: boolean = false;


  /**
   * 分页
   * @param event
   */
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.queryConfig(this.key, this.pageOpts);
  }

  /**
   * 编辑
   * @param data
   */
  edit(data: any) {
    this.configOpen = !this.configOpen;
    this.configEditObj = data;
  }

  /**
   * 查询方法
   * @param key
   * @param page
   */
  queryConfig(key: string, page: any) {
    this.configService.getConfigList(page, key).subscribe(res=> {
      this.configList = res.json();
    });
  }

  /**
   * 条件搜索
   * @param data
   */
  searchByCondition(data: any) {
    this.key = data;
    this.queryConfig(data, this.pageOpts);
  }

  /**
   * 模态cancel
   */
  cancel() {
    this.configOpen = !this.configOpen;
  }

  /**
   * 模态编辑按钮
   */
  confirmEdit() {
    this.notificationOpen = !this.notificationOpen;
  }

  /**
   * prompt取消
   */
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  /**
   * 确认修改
   */
  confirm() {
    this.notificationOpen = !this.notificationOpen;
    this.configService.editConfig(this.configEditObj).subscribe(res=> {
      let ret = res.json();
      if (ret.success) {
        this.toastFunction('修改成功', 'success');
      } else {
        this.toastFunction('修改失败', 'error');
      }
    });
  }

  /**
   * toast事件
   * @param event
   */
  notifyParamFunction(event) {
    this.showAlert = !this.showAlert;
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