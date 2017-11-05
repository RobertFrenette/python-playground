import { TestBed, inject } from '@angular/core/testing';

import { MountainProviderService } from './mountain-provider.service';

describe('MountainProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MountainProviderService]
    });
  });

  it('should be created', inject([MountainProviderService], (service: MountainProviderService) => {
    expect(service).toBeTruthy();
  }));
});
