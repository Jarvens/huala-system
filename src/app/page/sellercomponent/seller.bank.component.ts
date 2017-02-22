import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SellerService} from '../../service/seller.service';
@Component({
  selector: 'seller-bank-component',
  templateUrl: './seller.bank.component.html'
})

export class SellerBankComponent implements OnChanges,OnInit {

  /**
   * 银行卡信息
   * @type {Array}
   */
  bankList: Array<any> = [];

  /**
   * 用户列表
   * @type {Array}
   */
  userList: Array<any> = [];

  @Input() currentSeller: any = {};

  /**
   * 打开 |关闭 编辑框
   * @type {boolean}
   */
  openEdit: boolean = false;

  /**
   * 显示 |隐藏 *
   * @type {boolean}
   */
  required: boolean = true;

  /**
   * 银行卡对象
   * @type {{}}
   */
  bankObj: any = {};

  constructor(private sellerService: SellerService) {
  }

  ngOnInit(): void {
    this.getBankListData();
  }


  /**
   * 监听当前店铺对象改变触发查询操作
   * @param changes
   */
  ngOnChanges(changes: any): void {
    let result = changes['currentSeller'];
    if (!result) {
      return;
    }
    if (result.currentValue.id != result.previousValue.id) {
      this.getUserListData(this.currentSeller.id);
    }
  }


  /**
   * 查询银行卡列表信息
   */
  getBankListData() {
    this.sellerService.getBankDataList().subscribe(res=> {
      this.bankList = res.json().body;
    });
  }

  /**
   * 查询用户信息
   * @param id
   */
  getUserListData(id: number) {
    this.sellerService.getBankUserDataList(this.currentSeller.id).subscribe(res=> {
      this.userList = res.json().rows;
    });
  }

  /**
   * 修改银行卡信息
   */
  updateBank(data: any) {

    console.log('打印银行卡信息 ->',data);
    this.bankObj = data;
    this.openEdit = !this.openEdit;
  }

}