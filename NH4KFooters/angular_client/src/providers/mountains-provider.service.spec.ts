import { TestBed, inject } from '@angular/core/testing';

import { MountainsProviderService } from './mountains-provider.service';

describe('MountainsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MountainsProviderService]
    });
  });

  it('should be created', inject([MountainsProviderService], (service: MountainsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
