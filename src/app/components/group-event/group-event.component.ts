import { Component, OnInit, Input } from '@angular/core';
import { GroupEvent } from 'src/app/types/types';

@Component({
  selector: 'app-group-event',
  templateUrl: './group-event.component.html',
  styleUrls: ['./group-event.component.scss']
})
export class GroupEventComponent implements OnInit {

  @Input()
  public groupEvent: GroupEvent;

  constructor() { }

  ngOnInit() {
  }

}
