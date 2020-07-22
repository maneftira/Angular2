import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressCommitteeComponent } from './congress-committee.component';

describe('CongressCommitteeComponent', () => {
  let component: CongressCommitteeComponent;
  let fixture: ComponentFixture<CongressCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongressCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
