import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { GroupEventComponent } from './routes/group-event/group-event.component';
import { CommonModule } from '@angular/common';
import { GroupEventOverviewComponent } from './routes/group-event-overview/group-event-overview.component';
import { GroupEventListItemComponent } from './routes/group-event-overview/group-event-list-item/group-event-list-item.component';
import { TotalExpensesPipe } from './pipes/total-expenses.pipe';
import { ExpenseAddComponent } from './routes/expense-add/expense-add.component';
import { ExpenseListItemComponent } from './routes/group-event/expense-list-item/expense-list-item.component';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { PersonCreditComponent } from './routes/person-credit/person-credit.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupEventComponent,
    GroupEventOverviewComponent,
    GroupEventListItemComponent,
    TotalExpensesPipe,
    ExpenseAddComponent,
    ExpenseListItemComponent,
    CurrencyPipePipe,
    PersonCreditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private d: DataService) {

  }
}
