import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { GroupEvent } from 'src/app/types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-event-overview',
  templateUrl: './group-event-overview.component.html',
  styleUrls: ['./group-event-overview.component.scss']
})
export class GroupEventOverviewComponent implements OnInit {

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
  }

  public select(g: GroupEvent) {
    this.data.selectGroupEvent(g);
    this.router.navigateByUrl('/group-event');
  }

}
