import {Component, OnInit} from '@angular/core';
import {INglDatatableSort, INglDatatableRowClick} from 'ng-lightning/ng-lightning';
import {ActivityService} from '../../service/activity.service';
const DATA = [
  {rank: 1, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387},
  {rank: 2, name: 'Karl', surname: 'Malone', points: 36928},
  {rank: 3, name: 'Kobe', surname: 'Bryant', points: 33643},
  {rank: 4, name: 'Michael', surname: 'Jordan', points: 32292},
  {rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419},
];
@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html'
})

export class ActivityComponent implements OnInit {
  constructor(private activityService: ActivityService) {
  }

  showAlert = false;
  required: boolean = true;
  startDate: Date = new Date();
  endDate: Date = new Date();
  showStartDate: boolean = false;
  showEndDate: boolean = false;
  monthNames: Array<string> = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  dayNamesShort: Array<string> = ['日', '一', '二', '三', '四', '五', '六',];

  onClose(reason: string) {
    console.log(`Alert closed by ${reason}`);
    this.showAlert = false;
  }

  show() {
    this.showAlert = true;
  }

  card: any = {types: '0'};
  total = 172;

  pageDefault: number;
  pageBoundary: number;
  page: number;

  ngOnInit(): void {
    //
    //this.activityService.getCardList(null, this.card).subscribe(res=> {
    //	console.log("请求了");
    //	console.log(res);
    //});
  }

  data = DATA;

  // Initial sort
  sort: INglDatatableSort = {key: 'rank', order: 'asc'};

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const {key, order} = $event;
    this.data.sort((a: any, b: any) => {
      return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    });
  }

  toggleData() {
    this.data = this.data ? null : DATA;
  }

  onRowClick($event: INglDatatableRowClick) {
    console.log('clicked row', $event.data);
  }

  opened: boolean = false;
  size: string;

  noHeader: boolean = false;
  noFooter: boolean = false;
  directional: boolean = false;

  open(size?: string) {
    this.size = size;
    this.opened = !this.opened;
  }

  cancel() {
    this.opened = false;
  }

  //开始时间change事件
  startDateChange(event: any) {
    this.showStartDate = !this.showStartDate;
  }

  //结束时间change事件
  endDateChange(event: any) {
    this.showEndDate = !this.showEndDate;
  }

}