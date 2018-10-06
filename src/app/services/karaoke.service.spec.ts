import { TestBed, inject } from '@angular/core/testing';

import { KaraokeService } from './karaoke.service';

describe('KaraokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KaraokeService]
    });
  });

  it('should be created', inject([KaraokeService], (service: KaraokeService) => {
    expect(service).toBeTruthy();
  }));
});
