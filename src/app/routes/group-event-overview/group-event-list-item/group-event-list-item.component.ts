import { Component, OnInit, Input } from '@angular/core';
import { GroupEvent } from 'src/app/types/types';

@Component({
  selector: 'app-group-event-list-item',
  templateUrl: './group-event-list-item.component.html',
  styleUrls: ['./group-event-list-item.component.scss']
})
export class GroupEventListItemComponent implements OnInit {

  @Input()
  public groupEvent: GroupEvent;

  constructor() { }

  ngOnInit() {
  }

}
