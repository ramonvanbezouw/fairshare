import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Share, Expense } from 'src/app/types/types';
import { take } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.scss']
})
export class ExpenseAddComponent implements OnInit {

  public price = 0;
  public expense: Expense;

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.groupEvent$.pipe(take(1)).subscribe((g) => {
      const shares: Share[] = g.persons.map(p => ({person: p, portion: 1, uuid: uuid()}));
      this.expense = {
        payer: g.persons[0],
        shares,
        price: 0,
        description: '',
        date: new Date(),
        uuid: uuid()
      };
    });
  }

  public add() {
    this.data.addExpense(this.expense);
    this.router.navigateByUrl('/group-event');
  }

}
