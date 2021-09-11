import { TestBed } from '@angular/core/testing';

import { HasroleGuard } from './hasrole.guard';

describe('HasroleGuard', () => {
  let guard: HasroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
