import { TestBed } from '@angular/core/testing';

import { DocumentData } from './document-data';

describe('DocumentData', () => {
  let service: DocumentData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
