import {Component, OnInit} from '@angular/core';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-movie-list-component',
  templateUrl: './hng.movie.list.component.html'
})

export class HngMovieListComponent implements OnInit {
  //活动对象
  public activity: Array<any> = [];
  //影片列表
  public movieDataList: Array<any> = [];
  //分页对象
  public pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //当前商家对象
  public currentSeller: any = {};
  //活动列表
  public activityData: any = {};
  //prompt 提示消息
  public promptMessage: string = '你确定要删除该活动吗?';
  //prompt 打开|关闭
  public notificationOpen: boolean = false;
  //toast 类型
  public toastType: string = 'success';
  //toast 提示消息
  public toastMessage: string = '';
  //打开|关闭 toast
  public showAlert: boolean = false;

  constructor(private hngService: HngService) {
  }

  ngOnInit(): void {
    this.getMovieActiveList(this.pageOpts);
  }

  //商家列表传递事件
  targetFunction(event: any) {

  }

  //获取活动列表
  getMovieActiveList(page: any) {
    this.hngService.getMovieActiveDataList(page).subscribe(res=> {
      this.activityData = res.json();
    });
  }

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt 确定事件
  confirm() {

  }

  //toast传播事件
  notifyParamFunction(event: any) {

  }

}