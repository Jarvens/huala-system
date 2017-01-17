import { Component, OnInit } from "@angular/core";
import { HngService } from "../../../service/hng.service";

@Component({
  moduleId: "companyList",
  selector: "company-list",
  templateUrl: "./hng.companyList.component.html"
})

export class HngCompanyListComponent implements OnInit {
  public searchKey:string = '';
  public companies:Array<any> = [];
  public pageOpts: any = {total: 100, limit: 5, perPage: 10, page: 1}; //分页对象
  public promptMessage:string = "您确定要删除该公司吗?";
  public notificationOpen:boolean = false;
  public curOpCompany:any;

  constructor(public hngService: HngService){}

  ngOnInit(){
    this.getCompanies(1);
  }

  public getCompanies(pageNum){
    let gData = {
      page: 1,
      size: 15,
      searchKey: this.searchKey
    };

    if(pageNum){
      gData.page = pageNum;
    }

    this.hngService.getCompanies(gData).subscribe(res => {
      let data = res.json();
      this.companies = data.rows;

      this.pageOpts = {
        total: data.total > 0 ? data.total : 1,
        limit: 5,
        perPage: 10,
        page: data.page
      };
      console.log(data);
    });
  }

  /*
   * @Description: Close the confirm box;
   * @Date: 2017-01-17;
   */
  public cancel(){
    this.notificationOpen = false;
  }

  /*
   * @Description: Confirm to delete the company;
   * @Date: 2017-01-17;
   */
  public confirm(){
    this.notificationOpen = false;
    this.delCompany();
  }

  /*
   * @Description: To edit the company;
   * @Date: 2017-01-17;
   */
  public toEdit(company){
    this.notificationOpen = true;
    this.curOpCompany = company;
  }

  /*
   * @Description: Delete the company;
   * @Date: 2017-01-17;
   */
  public delCompany() {
    this.hngService.deleteCompany(this.curOpCompany).subscribe(res => {
      let data = res.json();

      if(data.success){
        this.getCompanies(this.pageOpts.page);
      }
    });
  }
}