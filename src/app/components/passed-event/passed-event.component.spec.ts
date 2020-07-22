import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedEventComponent } from './passed-event.component';

describe('PassedEventComponent', () => {
  let component: PassedEventComponent;
  let fixture: ComponentFixture<PassedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
