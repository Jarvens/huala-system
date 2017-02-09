import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HngService} from '../../../service/hng.service';
@Component({
  selector: 'hng-movie-list-component',
  templateUrl: './hng.movie.list.component.html'
})

export class HngMovieListComponent implements OnInit {
  //活动对象
  public activity: any = {};
  //影片列表
  public movieDataList: Array<any> = [];
  //活动列表分页对象
  public pageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
  //统计分页对象
  public votePageOpts: any = {page: 1, total: 0, limit: 3, perPage: 10};
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
  //活动操作对象
  public operaActiveObj: any = {};
  //统计详情  打开|关闭
  public statisticalOpened: boolean = false;
  //统计数据
  public voteDataList: any = {};
  //当前影片对象
  public currentMovie: any = {};
  @Output() outPutCurrentActive = new EventEmitter<any>();

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
    this.notificationOpen = !this.notificationOpen;
    this.delActivity();
  }

  //toast传播事件
  notifyParamFunction(event: boolean) {
    this.showAlert = event;
  }

  //删除按钮点击事件
  delClick(data: any) {
    this.operaActiveObj = data;
    this.notificationOpen = !this.notificationOpen;
  }

  //活动详情
  detail(data: any) {
    this.activity = data;
    this.movieDataList = data.movies;
  }

  //活动列表分页
  pageChange(data: any) {
    this.pageOpts.page = data;
    this.getMovieActiveList(this.pageOpts);
  }

  //删除操作
  delActivity() {
    this.hngService.delActive(this.operaActiveObj).subscribe(res=> {
      let result = res.json();
      if (result.success) {
        this.toastFunction('删除成功', 'success');
        this.getMovieActiveList(this.pageOpts);
      } else {
        this.toastFunction('删除失败,请联系管理员', 'error');
      }
    });
  }

  //toast函数
  toastFunction(message: string, toastType: string) {
    this.showAlert = !this.showAlert;
    this.toastMessage = message;
    this.toastType = toastType;
  }

  //统计操作
  vote(data: any) {
    this.statisticalOpened = !this.statisticalOpened;
    this.currentMovie = data;
    this.voteList(this.votePageOpts, this.currentMovie.id);
  }

  //统计数据集合
  voteList(page: any, id: string) {
    this.hngService.getMovieVote(page, id).subscribe(res=> {
      this.voteDataList = res.json();
    });
  }

  //统计详情分页
  votePageChange(data: number) {
    this.votePageOpts.page = data;
    this.voteList(this.votePageOpts, this.currentMovie.id);
  }

  //活动编辑事件
  editActive(data: any) {
    this.outPutCurrentActive.emit(data);
  }

  /**
   * 导出
   */
  exportDataReport(){

  }

  /**
   * 导入
   */
  importDataReport(){

  }
}