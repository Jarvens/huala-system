import {Component, OnInit} from "@angular/core";
import {MyHttp} from "../../core/http";
import {
  BaiduMap,
  OfflineOptions,
  ControlAnchor,
  NavigationControlType
} from '../../../../node_modules/angular2-baidu-map/src/index';

@Component({
  moduleId: "baiduMap",
  selector: 'hl-Map',
  template: `
        <baidu-map ak="KzRNpmieQlo6olkTGaKXzNCQ&" [options]="opts" [offline]="offlineOpts" (onMapLoaded)="loadMap($event)" (onMarkerClicked)="clickMarker($event)"></baidu-map>
    `,
  styles: [`
        baidu-map{
            height: 600px;
            display: block;
        }
    `]
})

export class MapComponent implements OnInit {

  constructor() {
  }

  opts: any;
  offlineOpts: OfflineOptions;

  ngOnInit() {
    this.opts = {
      center: {
        longitude: 120.22037542,
        latitude: 30.25924446
      },
      zoom: 12,
      markers: [{
        longitude: 120.22037542,
        latitude: 30.25924446,
        autoDisplayInfoWindow: true
      }],
      geolocationCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
      },
      scaleCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
      },
      overviewCtrl: {
        isOpen: true
      },
      navCtrl: {
        type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
      }
    };

    this.offlineOpts = {
      retryInterval: 5000,
      txt: 'NO-NETWORK'
    };
  }

  loadMap(e: any) {

  }

  clickMarker(marker: any) {

  }

}
