import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NglModule} from 'ng-lightning';
import {ENV_PROVIDERS} from './environment';
import {BaiduMap} from '../../node_modules/angular2-baidu-map/src';
import {AppComponent} from './app.component';
// import {TreeModule} from "angular2-tree-component";
//路由
import {AppRoutingModule} from './router/routing';
//import {DropdownTreeviewModule} from 'ng2-dropdown-treeview';
//导航
import {NavTopComponent} from './page/nav/nav.top.component';
import {NavLeftComponent} from './page/nav/nav.left.component';
//http
import {MyHttp} from './core/http';
//业务组件
import {LoginComponent} from './page/login/login.component';
import {IndexComponent} from './page/index/inde.component';
import {ActivityComponent} from './page/activtity/activity.component';
import {ChartComponent} from './page/chart/chart.component';
import {MapComponent} from './page/map/map.component';
import {BannerMainComponent} from './page/banner/banner.main.component';
import {BannerListComponent} from './page/banner/banner.list.component';
import {BannerEntryComponent} from './page/banner/banner.entry.component';
import {CardComponent} from './page/card/card.component';
import {SellerMainComponent} from './page/seller/seller.main.component';
import {SellerListComponent} from './page/seller/seller.list.component';
import {SellerDetailComponent} from './page/seller/seller.detail.component';
import {PictureComponent} from './page/system/picture/picture.component';
import {AppVersionComponent} from './page/system/app/app.version.component';
import {UserComponent} from './page/system/user/user.component';
import {OrderComponent} from './page/order/order.component';
import {MessageComponent} from './page/system/message/message.component';
import {BalanceComponent} from './page/balance/balance.component';
import {GoodsComponent} from './page/goods/goods.component';
import {GoodsCatComponent} from "./page/goods/goodsCat.component";
import {GoodsListComponent} from "./page/goods/goodsList.component";
import {GoodsInfoComponent} from "./page/goods/goodsInfo.component";
import {SellerDataComponent} from './page/sellerdata/seller.data.component';
import {ArticleComponent} from './page/system/article/article.component';
import {ArticleListComponent} from './page/system/article/article.list.component';
import {ArticleEntryComponent} from './page/system/article/article.entry.component';
import {EveryDateReportComponent} from './page/everydatereport/every.date.report.component';
import {FinanceListComponent} from './page/finance/finance.list.component';
import {SuppliersListComponent} from './page/suppliers/suppliersList.component';
import {SellerSubsidyComponent} from './page/sellersubsidy/seller.subsidy.component';
import {SpikeListComponent} from './page/spike/spike.list.component';
import {SellerAuditComponent} from './page/selleraudit/seller.audit.component';
import {ConfigComponent} from './page/system/config/config.component';
import {SysMenuComponent} from './page/system/menu/sys.menu.component';
import {OrderLogComponent} from './page/orderlog/order.log.component';
import {RefundOrderComponent} from './page/refundorder/refund.order.component';
//惠农购业务
import {HngCompanyComponent} from './page/hng/company/hng.company.component';
import {HngJobComponent} from './page/hng/job/hng.job.component';
import {HngRecruitMainComponent} from './page/hng/recruit/hng.recruit.main.component';
import {HngMovieComponent} from './page/hng/movie/hng.movie.component';
import {HngRecruitBasicComponent} from './page/hng/recruit/hng.recruit.basic.component';
import {HngCompanyListComponent} from './page/hng/company/hng.companyList.component.ts';
import {HngcompanyInfoComponent} from './page/hng/company/hng.companyInfo.component';
/**
 *
 * 公用组件
 */
import {SearchComponent} from './page/component/searchinput/search.component';
import {ImgUploadComponent} from './page/component/imgupload/img.upload.component';
import {BreadCrumbsComponent} from './page/component/breadcrumbs/bread.crumbs.component';
import {ToastComponent} from './page/component/toast/toast.component';
import {ConfirmPromptComponent} from './page/component/prompt/confirm.prompt.component';
import {StartTimeComponent} from './page/component/dateutil/start.time.component';
import {EndTimeCOmponent} from './page/component/dateutil/end.time.component';
import {QuillEditorComponent} from './page/component/quilleditor/quill.editor.component';
import {QuillEditor} from './utils/quillEditor/quillEditor';
//Directive

/**
 * 自定义管道
 */
//三元表达式管道
import {ThreeElementExpression} from './pipe/three.element.expression';
/**
 * 业务Service
 */
import {ActivityService} from './service/activity.service';
import {LoginService} from './service/login.service';
import {MenuService} from './service/menu.service';
import {BannerService} from './service/banner.service';
import {ChartService} from './service/chart.service';
import {SellerService} from './service/seller.service';
import {PictureService} from './service/picture.service';
import {AppVersionService} from './service/app.version.service';
import {UserService} from './service/user.service';
import {OrderService} from './service/order.service';
import {MessageService} from './service/message.service';
import {BalanceService} from './service/balance.service';
import {GoodsService} from "./service/goods.service";
import {SellerDataService} from './service/seller.data.service';
import {ArticleService} from './service/article.service';
import {HngService} from './service/hng.service';
import {CardService} from './service/card.service';
import {EveryDateReportService} from './service/every.date.report.service';
import {FinanceService} from './service/finance.service';
import {SellerSubsidyService} from './service/seller.subsidy.service';
import {SpikeService} from './service/spike.service';
import {SellerAuditService} from './service/seller.audit.service';
import {ConfigService} from './service/config.service';
import {SysMenuService} from './service/sys.menu.service';
import {OrderLogService} from './service/order.log.service';
import {RefundOrderService} from './service/refund.order.service';
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavTopComponent,
    NavLeftComponent,
    LoginComponent,
    IndexComponent,
    ActivityComponent,
    ChartComponent,
    MapComponent,
    BaiduMap,
    BannerMainComponent,
    BannerListComponent,
    BannerEntryComponent,
    CardComponent,
    SellerMainComponent,
    SellerListComponent,
    SellerDetailComponent,
    ThreeElementExpression,
    SearchComponent,
    ImgUploadComponent,
    PictureComponent,
    AppVersionComponent,
    BreadCrumbsComponent,
    PictureComponent,
    OrderComponent,
    UserComponent,
    MessageComponent,
    ToastComponent,
    BalanceComponent,
    ConfirmPromptComponent,
    GoodsComponent,
    GoodsCatComponent,
    GoodsListComponent,
    GoodsInfoComponent,
    SellerDataComponent,
    StartTimeComponent,
    EndTimeCOmponent,
    QuillEditorComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleEntryComponent,
    HngCompanyComponent,
    HngCompanyListComponent,
    HngcompanyInfoComponent,
    HngJobComponent,
    HngRecruitMainComponent,
    HngMovieComponent,
    HngRecruitBasicComponent,
    QuillEditor,
    EveryDateReportComponent,
    FinanceListComponent,
    SuppliersListComponent,
    SellerSubsidyComponent,
    SpikeListComponent,
    SellerAuditComponent,
    ConfigComponent,
    SysMenuComponent,
    OrderLogComponent,
    RefundOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    //DropdownTreeviewModule.forRoot(),
    NglModule.forRoot(),
    // TreeModule
  ],
  providers: [
    ENV_PROVIDERS,
    MyHttp,
    ActivityService,
    LoginService,
    MenuService,
    BannerService,
    ChartService,
    SellerService,
    PictureService,
    AppVersionService,
    OrderService,
    UserService,
    MessageService,
    BalanceService,
    GoodsService,
    SellerDataService,
    ArticleService,
    HngService,
    CardService,
    EveryDateReportService,
    FinanceService,
    SellerSubsidyService,
    SpikeService,
    SellerAuditService,
    ConfigService,
    SysMenuService,
    OrderLogService,
    RefundOrderService
  ]
})
export class AppModule {
  constructor() {
  }

}

