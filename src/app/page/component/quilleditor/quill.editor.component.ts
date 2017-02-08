import {Component} from '@angular/core';
@Component({
  selector: 'quill-editor-component',
  templateUrl: './quill.editor.component.html'
})

export class QuillEditorComponent {
  //内容
  editorContent: string = ``;
  //placeholder
  editorConfig: any = {placeholder: "输入公告内容,支持html"};
  constructor() {
  }
  //初始化
  onEditorCreated(quill) {
  }
  //内容改变
  onContentChanged({quill, html, text}) {
  }
}