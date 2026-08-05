import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardValidation } from './standard-validation';

describe('StandardValidation', () => {
  let component: StandardValidation;
  let fixture: ComponentFixture<StandardValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
