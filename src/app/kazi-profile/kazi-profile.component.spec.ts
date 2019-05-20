import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaziProfileComponent } from './kazi-profile.component';

describe('KaziProfileComponent', () => {
  let component: KaziProfileComponent;
  let fixture: ComponentFixture<KaziProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaziProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaziProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
