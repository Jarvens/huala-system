import {Component, EventEmitter, Output, Input} from '@angular/core';
import {MyHttp} from '../../core/http';

/**
 * 图片上传工具
 * V1.0
 */
@Component({
	selector: 'img-upload-component',
	templateUrl: './img.upload.component.html'
})
export class ImgUploadComponent {
	//上传成功返回地址
	@Output() imgAddress = new EventEmitter<string>();
	//上传路径
	@Input() uploadAddress: string = '';

	constructor (private http: MyHttp) {
	}

}