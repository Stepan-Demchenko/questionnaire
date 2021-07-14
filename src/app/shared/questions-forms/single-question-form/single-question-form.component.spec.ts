import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuestionFormComponent } from './single-question-form.component';

describe('AnswerQuestionFormComponent', () => {
  let component: SingleQuestionFormComponent;
  let fixture: ComponentFixture<SingleQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQuestionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should management', () => {
    expect(component).toBeTruthy();
  });
});
