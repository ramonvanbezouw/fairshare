import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/types/types';

@Component({
  selector: 'app-expense-list-item',
  templateUrl: './expense-list-item.component.html',
  styleUrls: ['./expense-list-item.component.scss']
})
export class ExpenseListItemComponent implements OnInit {

  @Input()
  public expense: Expense;

  constructor() { }

  ngOnInit() {
  }

}
