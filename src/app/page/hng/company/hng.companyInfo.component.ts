import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {HngService} from "../../../service/hng.service";
import {ToastEntity} from '../../../domain/toast';

@Component({
  moduleId: "companyInfo",
  selector: "company-info",
  templateUrl: "hng.companyInfo.component.html"
})

export class HngcompanyInfoComponent implements OnChanges {
  @Input() public companyInput: any;
  @Input() public noBtn: boolean = true;
  @Output() public postCompanyInfo = new EventEmitter<any>();
  /**
   * 图片上传返回地址
   */
  receiveUrl: string;

  //toast
  toast = new ToastEntity();
  //公司信息;
  public companyInfo = {
    companyName: '',
    contacts: '',
    contactsPhone: '',
    filePath: ''
  };

  constructor(public hngService: HngService) {
    if (this.companyInput) {
      this.companyInfo = this.companyInput;
    }
  }

  ngOnChanges(changes) {
    let company = changes['companyInput'];
    if (company && company.currentValue && company.currentValue != company.previousValue) {
      this.companyInfo = company.currentValue;
    }
  }

  /*
   * @Description: Add new company;
   * @Date: 2017-01-17;
   */
  public addCompany() {
    this.companyInfo.filePath = this.receiveUrl;
    let valid = this.checkCompanyInfo();
    if (!valid) {
      return;
    }
    this.hngService.addCompany(this.companyInfo).subscribe(res => {
      let data = res.json();
      if (data.success) {
        this.toastFunction('保存成功', 'success');
      } else {
        this.toastFunction(data.message, 'error');
      }
    });
  }

  /*
   * @Description: Check the company info;
   * @Date: 2017-01-17;
   */
  public checkCompanyInfo(): boolean {
    let info = this.companyInfo;
    if (!info.companyName) {
      this.toastFunction('请输入公司名称', 'info');
      return false;
    } else if (!info.contacts) {
      this.toastFunction('请输入联系人名称', 'info');
      return false;
    } else if (!info.contactsPhone) {
      this.toastFunction('请输入联系人电话', 'info');
      return false;
    } else if (!info.filePath) {
      this.toastFunction('请上传营业执照', 'info');
      return false;
    }
    return true;
  }

  /*
   * @Description: Post the company info;
   * @Date: 2017-01-17;
   */
  public postInfo() {
    this.postCompanyInfo.emit(this.companyInfo);
  }

  /**
   * toast消息通知
   * @param data
   */
  notifyParamFunction(data: boolean) {
    this.toast.showAlert = data;
  }

  /**
   * toast函数
   * @param message
   * @param toastType
   */
  toastFunction(message: string, toastType: string) {
    this.toast.showAlert = !this.toast.showAlert;
    this.toast.toastMessage = message;
    this.toast.toastType = toastType;
  }
}