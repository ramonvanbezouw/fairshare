import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreditComponent } from './person-credit.component';

describe('PersonCreditComponent', () => {
  let component: PersonCreditComponent;
  let fixture: ComponentFixture<PersonCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
