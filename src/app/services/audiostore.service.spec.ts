import { TestBed } from '@angular/core/testing';

import { AudiostoreService } from './audiostore.service';

describe('AudiostoreService', () => {
  let service: AudiostoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiostoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
