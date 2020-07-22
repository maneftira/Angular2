import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCongresspresidentComponent } from './word-congresspresident.component';

describe('WordCongresspresidentComponent', () => {
  let component: WordCongresspresidentComponent;
  let fixture: ComponentFixture<WordCongresspresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCongresspresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCongresspresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
