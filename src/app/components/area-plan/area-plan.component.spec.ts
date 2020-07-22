import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPlanComponent } from './area-plan.component';

describe('AreaPlanComponent', () => {
  let component: AreaPlanComponent;
  let fixture: ComponentFixture<AreaPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
