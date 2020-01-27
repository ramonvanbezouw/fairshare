import { TotalExpensesPipe } from './total-expenses.pipe';

describe('TotalExpensesPipe', () => {
  it('create an instance', () => {
    const pipe = new TotalExpensesPipe();
    expect(pipe).toBeTruthy();
  });
});
