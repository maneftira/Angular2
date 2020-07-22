import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificProgrammeComponent } from './scientific-programme.component';

describe('ScientificProgrammeComponent', () => {
  let component: ScientificProgrammeComponent;
  let fixture: ComponentFixture<ScientificProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
