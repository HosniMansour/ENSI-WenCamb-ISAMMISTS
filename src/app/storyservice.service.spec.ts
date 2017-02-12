/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoryserviceService } from './storyservice.service';

describe('StoryserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryserviceService]
    });
  });

  it('should ...', inject([StoryserviceService], (service: StoryserviceService) => {
    expect(service).toBeTruthy();
  }));
});
