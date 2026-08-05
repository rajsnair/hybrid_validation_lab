import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeValidation } from './large-validation';

describe('LargeValidation', () => {
  let component: LargeValidation;
  let fixture: ComponentFixture<LargeValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(LargeValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
