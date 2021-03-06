import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupEventOverviewComponent } from './routes/group-event-overview/group-event-overview.component';
import { GroupEventComponent } from './routes/group-event/group-event.component';
import { ExpenseAddComponent } from './routes/expense-add/expense-add.component';
import { PersonCreditComponent } from './routes/person-credit/person-credit.component';


const routes: Routes = [
  { path: '', component: GroupEventOverviewComponent },
  { path: 'group-event', component: GroupEventComponent },
  { path: 'add-expense', component: ExpenseAddComponent },
  { path: 'person-credit', component: PersonCreditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
