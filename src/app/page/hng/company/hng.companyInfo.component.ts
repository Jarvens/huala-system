import { Component } from "@angular/core";
import { HngService } from "../../../service/hng.service";

@Component({
  moduleId: "addCompany",
  selector: "add-Company",
  templateUrl: "hng.companyInfo.component.html"
})

export class HngcompanyInfoComponent {
  public companyInfo = {
    companyName: '',
    contacts: '',
    contactsPhone: '',
    filePath: ''
  }; //公司信息;

  constructor(public hngService:HngService){}

  /*
   * @Description: Add new company;
   * @Date: 2017-01-17;
   */
  public addCompany(){
    let valid = this.checkCompanyInfo();

    if(!valid){
      return;
    }

    this.hngService.addCompany(this.companyInfo).subscribe(res => {
      let data = res.json();
    });
  }

  /*
   * @Description: Check the company info;
   * @Date: 2017-01-17;
   */
  public checkCompanyInfo():boolean{
    let info = this.companyInfo;

    if(!info.companyName){
      alert("请输入公司名称!");

      return false;
    } else if(!info.contacts){
      alert();

      return false;
    } else if(!info.contactsPhone){
      alert();

      return false;
    } else if(!info.filePath){
      alert();

      return false;
    }

    return true;
  }
}