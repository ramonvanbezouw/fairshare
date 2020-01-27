import { Expense, ExpensePersonCredit, GroupEvent } from 'src/app/types/types';

export const shareExpense = (expense: Expense): ExpensePersonCredit[] => {
  // count the portions
  const portions = expense.shares.map(s => s.portion).reduce((p, c) => p + c, 0);
  // calculate the prices of each unit
  const pricePerPortion = - expense.price / portions;
  // map shares to what everyone should pay
  const credits: ExpensePersonCredit[] = expense.shares.map(s => ({ person: s.person, credit: s.portion * pricePerPortion }));
  // make sure the one who pays get credit due
  credits.find(c => c.person.uuid === expense.payer.uuid).credit += expense.price;
  return credits;
};

export const endCredit = (groupEvent: GroupEvent): ExpensePersonCredit[] => {
  const startValues: ExpensePersonCredit[] = groupEvent.persons.map(person => ({ person, credit: 0 }));
  const expenseCredits: ExpensePersonCredit[][] = groupEvent.expenses.map(e => shareExpense(e));
  expenseCredits.forEach(expenseCredit => {
    expenseCredit.forEach(expense => {
      const match = this.startValues.find(expensePerson => expense.person.uuid === expensePerson.person.uuid);
      match.credit += match.credit;
    });
  });
  return startValues;
};
