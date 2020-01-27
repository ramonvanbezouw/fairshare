import { Pipe, PipeTransform } from '@angular/core';
import { GroupEvent } from '../types/types';

@Pipe({
  name: 'totalExpenses'
})
export class TotalExpensesPipe implements PipeTransform {

  transform(groupEvent: GroupEvent, ...args: any[]): number {
    return groupEvent.expenses.map(e => e.price).reduce((p, c) => p + c, 0);
  }

}
