import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../service/message.service';
@Component({
  selector: 'message-component',
  templateUrl: './message.component.html'
})

export class MessageComponent implements OnInit {
  constructor(private messageService: MessageService) {
  }

  //分页对象
  pageOpts: any = {total: 0, limit: 3, perPage: 10};
  //短信列表对象
  messageList: any = {};
  //搜索key
  key: string = '';
  placeholder: string = '手机号';
  //短信状态
  smsStatus: string = 'all';
  //短信类型
  type: string = 'all';
  //section打开or关闭
  open: boolean = false;

  ngOnInit(): void {
    this.getMessageList(null, this.key, this.type, this.smsStatus);
  }

  //条件搜索
  searchByCondition(event) {

  }

  //查询短信列表
  getMessageList(page: any, key: string, type: string, status: string) {
    this.messageService.getMessageList(page, key, type, status).subscribe(res=> {
      this.messageList = res.json();
      console.log(res.json());
    });
  }

  //分页
  pageChange(event){

  }

}