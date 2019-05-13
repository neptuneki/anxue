import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpDetailComponent } from './bp-detail.component';

describe('BpDetailComponent', () => {
  let component: BpDetailComponent;
  let fixture: ComponentFixture<BpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
