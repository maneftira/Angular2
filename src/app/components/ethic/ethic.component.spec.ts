import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicComponent } from './ethic.component';

describe('EthicComponent', () => {
  let component: EthicComponent;
  let fixture: ComponentFixture<EthicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
