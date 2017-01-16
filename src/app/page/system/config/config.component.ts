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

  //配置对象列表
  configList: any = {};
  //分页对象
  pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //搜索关键字
  key: string = '';
  //搜搜提示
  placeholder: string = '搜索..';
  //配置项模态  打开|关闭
  configOpen: boolean = false;

  //分页
  pageChange(event: any) {
    this.pageOpts.page = event;
    this.queryConfig(this.key, this.pageOpts);
  }

  //编辑
  edit(data: any) {
    this.configOpen = !this.configOpen;
  }

  //查询方法
  queryConfig(key: string, page: any) {
    this.configService.getConfigList(page, key).subscribe(res=> {
      this.configList = res.json();
    });
  }

  //条件搜索
  searchByCondition(data: any) {
    this.key = data;
    this.queryConfig(data, this.pageOpts);
  }

  //模态cancel
  cancel() {
    this.configOpen = !this.configOpen;
  }
}