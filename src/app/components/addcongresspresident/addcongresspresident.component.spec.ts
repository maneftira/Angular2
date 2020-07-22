import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcongresspresidentComponent } from './addcongresspresident.component';

describe('AddcongresspresidentComponent', () => {
  let component: AddcongresspresidentComponent;
  let fixture: ComponentFixture<AddcongresspresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcongresspresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcongresspresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
