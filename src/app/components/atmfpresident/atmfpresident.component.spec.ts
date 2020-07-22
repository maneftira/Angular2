import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMFpresidentComponent } from './atmfpresident.component';

describe('ATMFpresidentComponent', () => {
  let component: ATMFpresidentComponent;
  let fixture: ComponentFixture<ATMFpresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATMFpresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATMFpresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
