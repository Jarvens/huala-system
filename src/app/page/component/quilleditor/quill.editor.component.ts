import {Component} from '@angular/core';
@Component({
  selector:'quill-editor-component',
  templateUrl:'./quill.editor.component.html'
})

export class QuillEditorComponent{
  editorContent:string =`内容`;
  editorConfig:any ={placeholder:"输入公告内容,支持html"};

  constructor(){}
  onEditorCreated(quill){
    console.log('this is quill object',quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log(quill, html, text);
  }


}