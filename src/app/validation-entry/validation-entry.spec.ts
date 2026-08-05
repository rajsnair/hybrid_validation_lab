import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationEntry } from './validation-entry';

describe('ValidationEntry', () => {
  let component: ValidationEntry;
  let fixture: ComponentFixture<ValidationEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
