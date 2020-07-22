import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCommitteeComponent } from './org-committee.component';

describe('OrgCommitteeComponent', () => {
  let component: OrgCommitteeComponent;
  let fixture: ComponentFixture<OrgCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
