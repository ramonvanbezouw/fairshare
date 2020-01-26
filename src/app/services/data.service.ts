import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { GroupEvent } from 'src/app/types/types';
import { v4 as uuid } from 'uuid';

const lsGroupEvents = 'groupEvents';
const lsCurrentGroupEvent = 'currentGroup';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private groupEventsSubject: BehaviorSubject<GroupEvent[]> = new BehaviorSubject<GroupEvent[]>([]);
  public groupEvents$: Observable<GroupEvent[]> = this.groupEventsSubject.asObservable()
                                                                         .pipe(shareReplay(1));

  private groupEventSubject: Subject<GroupEvent> = new Subject<GroupEvent>();
  public groupEvent$: Observable<GroupEvent> = this.groupEventSubject.asObservable()
                                                                     .pipe(shareReplay(1));

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem(lsGroupEvents, JSON.stringify(this.groupEventsSubject.value));
  }

  private load() {
    const groupEvents = localStorage.getItem(lsGroupEvents);
    if (groupEvents !== null) {
      this.groupEventsSubject.next(JSON.parse(groupEvents));
      const currentGroupEvent = localStorage.getItem(lsCurrentGroupEvent);
      if (currentGroupEvent) {
        const match = this.groupEventsSubject.value.find((g) => g.uuid === currentGroupEvent);
        if (match !== undefined) {
          this.groupEventSubject.next(match);
        }
      }
    }
  }
}
