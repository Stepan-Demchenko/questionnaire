import { TestBed } from '@angular/core/testing';

import { EditQuestionResolver } from './edit-question.resolver';

describe('EditQuestionResolver', () => {
  let resolver: EditQuestionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditQuestionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
