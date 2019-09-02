import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetPage } from './carpet.page';

describe('CarpetPage', () => {
  let component: CarpetPage;
  let fixture: ComponentFixture<CarpetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
