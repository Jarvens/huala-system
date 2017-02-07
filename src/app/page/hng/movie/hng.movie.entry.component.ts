import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
@Component({
  selector: 'hng-movie-entry-component',
  templateUrl: './hng.movie.entry.component.html'
})
export class HngMovieEntryComponent implements OnChanges {
  //当前活动对象
  @Input() currentActiveObj: any = {};
  public movieData: Array<any> = [];
  //影片信息模态  打开|关闭
  public opened: boolean = false;
  //影片操作对象
  public operaMovieObj: any = {};
  //prompt提示消息
  public promptMessage: string = '你确定要删除该影片吗?';
  //prompt 打开|关闭
  public notificationOpen: boolean = false;
  //toast类型
  public toastType: string = 'success';
  //toast提示消息
  public toastMessage: string = '';
  //toast 打开|关闭
  public showAlert: boolean = false;


  ngOnChanges(changes: SimpleChanges): void {
    let _obj: any = changes['currentActiveObj'];
    if (_obj && _obj.currentValue != _obj.previousValue) {
      this.movieData = this.currentActiveObj.movies;
    }
  }

  //关联商家事件
  targetFunction(data: any) {
    this.currentActiveObj.sellerName = data.name;
  }

  //编辑影片信息
  edit(data: any) {
    this.operaMovieObj = data;
    this.opened = !this.opened;
  }

  //prompt取消事件
  cancelPrompt() {
    this.notificationOpen = !this.notificationOpen;
  }

  //prompt确认事件
  confirm() {

  }

  //toast传播事件
  notifyParamFunction(event: boolean) {

  }


}