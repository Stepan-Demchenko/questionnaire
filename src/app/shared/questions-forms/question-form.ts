import { Question } from '@shared/models/question';
import { QuestionStatus } from '@shared/enums/question-status';
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface QuestionFormInterface {
  question: Question;
  status: QuestionStatus;
  questionChanged: EventEmitter<Partial<Question>>;
  form: FormGroup;
  initializeForm(): void;
  accept(): void;
}
