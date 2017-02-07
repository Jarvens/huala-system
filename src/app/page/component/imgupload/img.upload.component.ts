import {Component, EventEmitter, Output, Input, OnChanges} from '@angular/core';
import {FileUploader} from '../../../utils/file-upload/file-uploader.class';
import {MyHttp} from '../../../core/http';

/**
 * 图片上传工具
 * V1.0
 */
@Component({
  selector: 'img-upload-component',
  templateUrl: 'img.upload.component.html'
})
export class ImgUploadComponent implements OnChanges {
  serverUrl: string = process.env.ApiUrl;
  public imgUrl:string = process.env.ImgUrl;
  @Input() public picUrl:string;
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
  ngOnChanges(changes):void {
    let chg = changes["picUrl"];

    if(chg && chg.currentValue && chg.currentValue != chg.previousValue){
      this.prevFile = this.imgUrl + chg.currentValue;
      console.log(chg.currentValue)
    }
  }

  //监听文件变化
  listenFileChange(dom: any) {
    this.uploader.setOptions({url: this.serverUrl + "/uploadImg.json?imgType=" + this.uploadFolder});
    //清空文件队列
    this.uploader.clearQueue();
    //将文件添加到上传队列
    this.uploader.addToQueue(dom.files);
    let that = this;
    let file = dom.files[0];
    //Base64转换
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      that.prevFile = this.result;
    }

  }

  //选择图片触发  input  type=file
  openFileSelect(dom: any) {
    dom.click();
  }

  //上传
  uploadAll() {
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any)=> {
      let result = JSON.parse(response).body;
      console.log(result)
      this.uploadAddr.emit(result);
    }
  }

  //重新选择
  reSelect($dom) {
    $dom.click();
  }

}