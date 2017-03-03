import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../service/activity.service';
@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html'
})

export class ActivityComponent implements OnInit {
  constructor(private activityService: ActivityService) {
  }


  ngOnInit(): void {

  }
}