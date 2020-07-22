import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddatmfpresidentComponent } from './addatmfpresident.component';

describe('AddatmfpresidentComponent', () => {
  let component: AddatmfpresidentComponent;
  let fixture: ComponentFixture<AddatmfpresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddatmfpresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddatmfpresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
