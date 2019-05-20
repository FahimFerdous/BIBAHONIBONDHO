import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteVolunteerProfileComponent } from './complete-volunteer-profile.component';

describe('CompleteVolunteerProfileComponent', () => {
  let component: CompleteVolunteerProfileComponent;
  let fixture: ComponentFixture<CompleteVolunteerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteVolunteerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteVolunteerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
