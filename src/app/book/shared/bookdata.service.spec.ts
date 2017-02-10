/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookdataService } from './bookdata.service';

describe('BookdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookdataService]
    });
  });

  it('should ...', inject([BookdataService], (service: BookdataService) => {
    expect(service).toBeTruthy();
  }));
});
