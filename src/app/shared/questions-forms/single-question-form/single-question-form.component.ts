import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Question } from '@shared/models/question';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from '@shared/enums/question-type';
import { Subject } from 'rxjs';
import { QuestionFormInterface } from '@shared/questions-forms/question-form';
import { QuestionStatus } from '@shared/enums/question-status';

@Component({
  selector: 'app-single-answer-question-form',
  templateUrl: './single-question-form.component.html',
  styleUrls: ['./single-question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleQuestionFormComponent implements OnInit, OnDestroy, QuestionFormInterface {
  @Input() question: Question;
  @Input() status: QuestionStatus;
  @Output() questionChanged: EventEmitter<Question> = new EventEmitter<Question>();

  form: FormGroup;
  questionType = QuestionType;
  questionStatus = QuestionStatus;

  private destroy$ = new Subject<void>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: [{ value: '', disabled: true }],
      options: [''],
      answer: ['', Validators.required]
    });
    this.form.patchValue(this.question);
    if (this.status === QuestionStatus.Answered) {
      this.form.disable();
    }
  }

  accept(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.questionChanged.emit({ ...this.question, ...this.form.value });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
