export interface GroupEvent {
  name: string;
  description: string;
  persons: Person[];
  expenses: Expense[];
  uuid: string;
}

export interface ExpensePersonCredit  {
  person: Person;
  credit: number;
}

export interface Person {
  name: string;
  uuid: string;
}

export interface Share {
  person: Person;
  portion: number;
  uuid: string;
}

export interface Expense {
  payer: Person;
  shares: Share[];
  price: number;
  date: Date;
  description: string;
  uuid: string;
}
