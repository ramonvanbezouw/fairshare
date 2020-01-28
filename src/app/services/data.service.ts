import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { GroupEvent, Expense } from 'src/app/types/types';

const lsGroupEvents = 'groupEvents';
const lsCurrentGroupEvent = 'currentGroup';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private groupEventsSubject: BehaviorSubject<GroupEvent[]> = new BehaviorSubject<GroupEvent[]>([]);
  public groupEvents$: Observable<GroupEvent[]> = this.groupEventsSubject.asObservable()
                                                                         .pipe(shareReplay(1));

  private groupEventSubject: BehaviorSubject<GroupEvent> = new BehaviorSubject<GroupEvent>(null);
  public groupEvent$: Observable<GroupEvent> = this.groupEventSubject.asObservable();

  constructor() {
    this.load();
  }

  public selectGroupEvent(g: GroupEvent) {
    this.groupEventSubject.next(g);
    localStorage.setItem(lsCurrentGroupEvent, g.uuid);
  }

  public addExpense(e: Expense) {
    this.groupEventSubject.value.expenses.push(e);
    this.save();
  }

  private save() {
    localStorage.setItem(lsGroupEvents, JSON.stringify(this.groupEventsSubject.value));
  }

  private load() {
    const groupEvents = localStorage.getItem(lsGroupEvents);
    console.log(groupEvents);
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
