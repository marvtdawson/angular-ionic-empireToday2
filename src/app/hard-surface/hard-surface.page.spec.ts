import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSurfacePage } from './hard-surface.page';

describe('HardSurfacePage', () => {
  let component: HardSurfacePage;
  let fixture: ComponentFixture<HardSurfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardSurfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSurfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
