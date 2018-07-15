import { TestBed, inject } from '@angular/core/testing';

import { FeedRetrieverService } from './feed-retriever.service';

describe('FeedRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedRetrieverService]
    });
  });

  it('should be created', inject([FeedRetrieverService], (service: FeedRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
