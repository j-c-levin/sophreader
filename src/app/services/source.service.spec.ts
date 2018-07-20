import { TestBed, inject } from '@angular/core/testing';

import { SourceService } from '@services/source.service';

describe('SourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceService]
    });
  });

  it('should be created', inject([SourceService], (service: SourceService) => {
    expect(service).toBeTruthy();
  }));
});
