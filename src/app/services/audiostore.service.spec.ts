import { TestBed } from '@angular/core/testing';

import { AudioStoreService } from './audio-store.service';

describe('AudiostoreService', () => {
  let service: AudioStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
