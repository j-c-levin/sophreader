import { TestBed, inject } from '@angular/core/testing';

import { FeedService } from '@services/feed.service';

describe('FeedRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedService]
    });
  });

  it('should be created', inject([FeedService], (service: FeedService) => {
    expect(service).toBeTruthy();
  }));
});
