import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {PictureService} from '../../../service/picture.service';
@Component({
  selector: 'picture-component',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent implements OnInit {

  /**
   * 选中目录
   * @type {string}
   */
  folder: string = '';
  /**
   * 图片对象
   * @type {{}}
   */
  pictureList: any = {};
  /**
   * 图片地址前缀
   */
  commonImgUrl = process.env.ImgUrl;
  /**
   * 分页对象
   * @type {{total: number; limit: number; perPage: number}}
   */
  pageOpts: any = {total: 0, limit: 3, perPage: 12};

  /**
   * 图片模态 打开|关闭
   * @type {boolean}
   */
  opened: boolean = false;

  /**
   * 当前图片
   * @type {string}
   */
  currentImg: string = '';

  ngOnInit(): void {
    this.pictureService.getPictureList(null, this.folder).subscribe(res=> {
      this.pictureList = res.json();
      this.cdr.detectChanges();
    });
  }

  constructor(private pictureService: PictureService, private cdr: ChangeDetectorRef) {
  }

  /**
   * 分页事件
   * @param event
   */
  pageChange(event: number) {
    this.pageOpts.page = event;
    this.pictureService.getPictureList(this.pageOpts, this.folder).subscribe(res=> {
      this.pictureList = res.json();
      this.cdr.detectChanges();
    });
  }

  openModal(data: any) {
    this.opened = !this.opened;
    this.currentImg = data.srcElement.currentSrc;
  }

}