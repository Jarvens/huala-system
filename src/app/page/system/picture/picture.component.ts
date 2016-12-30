import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {PictureService} from '../../../service/picture.service';
@Component({
  selector: 'picture-component',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent implements OnInit {

  //选中目录
  folder: string = '';
  //图片对象
  pictureList: any = {};
  //图片地址前缀
  commonImgUrl = process.env.ImgUrl;
  //分页对象
  pageOpts: any = {total: 0, limit: 3, perPage: 12}

  ngOnInit(): void {
    this.pictureService.getPictureList(null, this.folder).subscribe(res=> {
      this.pictureList = res.json();
      this.cdr.detectChanges();
    });
  }

  constructor(private pictureService: PictureService, private cdr: ChangeDetectorRef) {
  }

  //分页事件
  pageChange(event) {
    this.pageOpts.page = event;
    this.pictureService.getPictureList(this.pageOpts, this.folder).subscribe(res=> {
      this.pictureList = res.json();
      this.cdr.detectChanges();
    });
  }

}