import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTypeSelectComponent } from './question-type-select.component';

describe('QuestionTypeSelectComponent', () => {
  let component: QuestionTypeSelectComponent;
  let fixture: ComponentFixture<QuestionTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTypeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
