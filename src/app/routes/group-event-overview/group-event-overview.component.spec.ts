import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEventOverviewComponent } from './group-event-overview.component';

describe('GroupEventOverviewComponent', () => {
  let component: GroupEventOverviewComponent;
  let fixture: ComponentFixture<GroupEventOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEventOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEventOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
