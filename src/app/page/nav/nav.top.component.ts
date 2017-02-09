import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'nav-top-component',
  templateUrl: 'nav.top.component.html',
  styleUrls: ['./nav.top.component.css']
})

export class NavTopComponent implements OnInit {
  placement: string;
  settingOpen: boolean = false;
  tipOpen: boolean = false;
  opened: boolean = false;
  required: boolean = true;
  dropdownOpen: boolean = false;
  selectedCity: string = '请选择';
  cities:Array<any> = [
    {city: "330100", name: "杭州"},
    {city: "500100", name: "重庆"},
    {city: "130100", name: "石家庄"}
  ];
  
  ngOnInit(): void {}
  
  constructor(private router: Router) {
    let cityCode = localStorage.getItem("hualaCity");

    if(cityCode){
      this.cities.forEach(item => {
        if(item.city == cityCode){
          this.selectedCity = item.name;
        }
      });
    }
  }

  /*
   * @Description: Select city from drop down box;
   * @Author: yhm0188;
   * @Date: 2017-01-11;
   */
  selectCity(city):void {
    this.dropdownOpen = false;
    this.selectedCity = city.name;
    localStorage.setItem("hualaCity", city.city);
    this.router.navigateByUrl("/");
  }

  //设置tips打开或关闭
  settingChange(placement: string) {
    this.settingOpen = !this.settingOpen;
    this.placement = placement;
  }
  
  //消息tips打开或关闭
  tipChange(placement: string) {
    this.tipOpen = !this.tipOpen;
    this.placement = placement;
  }
  
  //登出
  logout() {
    window.localStorage.removeItem("hl-token");
    this.router.navigate(['/login']);
  }
  
  //打开修改密码模态
  openModifyPassword() {
    this.opened = !this.opened;
    this.settingOpen = !this.settingOpen;
  }
  
  //关闭修改密码模态
  cancel() {
    this.opened = !this.opened;
  }
  
}