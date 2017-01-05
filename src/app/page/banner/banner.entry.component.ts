import {Component} from '@angular/core';
@Component({
  selector: 'banner-entry-component',
  templateUrl: './banner.entry.component.html'
})

export class BannerEntryComponent {
  //错误提示显示状态
  required: boolean = true;
  //是否显示开始时间
  showStartDate: boolean = false;
  //是否显示结束时间
  showEndDate: boolean = false;
  //开始时间对象
  startDate: Date = new Date();
  //结束时间对象
  endDate: Date = new Date();
  //格式化月份
  monthNames: Array<string> = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  //格式化日期
  dayNamesShort: Array<string> = ['日', '一', '二', '三', '四', '五', '六',];
  opened: boolean = false;

  //开始时间change事件
  startDateChange(event: any) {
    this.showStartDate = !this.showStartDate;
  }

  //结束时间change事件
  endDateChange(event: Date) {
    this.showEndDate = !this.showEndDate;
  }

  //打开图片上传工具
  openModal() {
    this.opened = !this.opened;
  }

  //关闭选择图片模态
  cancel() {
    this.opened = !this.opened;
  }
}