import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteKaziProfileComponent } from './complete-kazi-profile.component';

describe('CompleteKaziProfileComponent', () => {
  let component: CompleteKaziProfileComponent;
  let fixture: ComponentFixture<CompleteKaziProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteKaziProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteKaziProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
