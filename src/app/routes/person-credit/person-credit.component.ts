import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { endCredit } from 'src/utils/calculations.util';
import { ExpensePersonCredit, GroupEvent } from 'src/app/types/types';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-person-credit',
  templateUrl: './person-credit.component.html',
  styleUrls: ['./person-credit.component.scss']
})
export class PersonCreditComponent implements OnInit {
  public endCredit: ExpensePersonCredit[];
  constructor(public data: DataService) { }

  ngOnInit() {
    this.data.groupEvent$.pipe(first()).subscribe(g => this.endCredit = endCredit(g));
  }

}
