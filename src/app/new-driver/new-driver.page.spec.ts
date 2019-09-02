import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDriverPage } from './new-driver.page';

describe('NewDriverPage', () => {
  let component: NewDriverPage;
  let fixture: ComponentFixture<NewDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
