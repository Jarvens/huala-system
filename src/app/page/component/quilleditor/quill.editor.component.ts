import {Component, Input} from '@angular/core';
@Component({
  selector: 'quill-editor-component',
  templateUrl: './quill.editor.component.html'
})

export class QuillEditorComponent {
  /**
   * 内容
   * @type {string}
   */
  editorContent: string = ``;
  /**
   * placeholder
   * @type {{placeholder: string}}
   */
  editorConfig: any = {placeholder: "输入公告内容,支持html"};
  /**
   * 文章对象
   * @type {{}}
   */
  @Input() articleObj: any = {};

  constructor() {
  }

  /**
   * 初始化
   * @param quill
   */
  onEditorCreated(quill) {
  }

  /**
   * 内容改变
   * @param quill
   * @param html
   * @param text
   */
  onContentChanged({quill, html, text}) {
  }
}