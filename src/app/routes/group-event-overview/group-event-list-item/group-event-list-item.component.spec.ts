import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEventListItemComponent } from './group-event-list-item.component';

describe('GroupEventListItemComponent', () => {
  let component: GroupEventListItemComponent;
  let fixture: ComponentFixture<GroupEventListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEventListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEventListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
