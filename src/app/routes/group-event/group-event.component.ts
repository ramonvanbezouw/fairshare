import { Component, OnInit, Input } from '@angular/core';
import { GroupEvent } from 'src/app/types/types';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-group-event',
  templateUrl: './group-event.component.html',
  styleUrls: ['./group-event.component.scss']
})
export class GroupEventComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
