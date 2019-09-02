import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerArrivalPage } from './trailer-arrival.page';

describe('TrailerArrivalPage', () => {
  let component: TrailerArrivalPage;
  let fixture: ComponentFixture<TrailerArrivalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerArrivalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerArrivalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
