import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {MyHttp} from '../../../core/http';

/**
 * 图片上传工具
 * V1.0
 */
@Component({
  selector: 'img-upload-component',
  templateUrl: 'img.upload.component.html'
})
export class ImgUploadComponent {
  serverUrl: string = process.env.ApiUrl;
  //文件上传地址成功返回地址
  @Output() uploadAddr = new EventEmitter<string>();
  //文件上传目录
  @Input() uploadFolder: string;
  //预览文件Base64地址
  prevFile: string = '';
  //初始化文件上传
  uploader: FileUploader = new FileUploader({
    url: this.serverUrl + "/uploadImg.json?imgType=" + this.uploadFolder
  });

  constructor(private http: MyHttp) {
  }


  //监听文件变化
  listenFileChange(target: any) {
    this.uploader.setOptions({url: this.serverUrl + "/uploadImg.json?imgType=" + this.uploadFolder});
    //将文件添加到上传队列
    this.uploader.addToQueue(target.files);
    let that = this;
    let file = target.files[0];
    //Base64转换
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      that.prevFile = this.result;
    }

  }

}