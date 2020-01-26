export interface GroupEvent {
  name: string;
  description: string;
  persons: Person[];
  expanses: Expanse[];
}

export interface Person {
  name: string;
  uuid: string;
}

export interface Share {
  person: Person;
  portion: number;
}

export interface Expanse {
  payer: Person;
  shares: Share[];
  price: number;
  date: Date;
  description: string;
}
