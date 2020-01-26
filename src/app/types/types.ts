export interface GroupEvent {
  name: string;
  description: string;
  persons: Person[];
  expanses: Expanse[];
  uuid: string;
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

export interface Expanse {
  payer: Person;
  shares: Share[];
  price: number;
  date: Date;
  description: string;
  uuid: string;
}
