import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { QuestionFormInterface } from '@shared/questions-forms/question-form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '@shared/models/question';
import { QuestionStatus } from '@shared/enums/question-status';

@Component({
  selector: 'app-open-question-form',
  templateUrl: './open-question-form.component.html',
  styleUrls: ['./open-question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenQuestionFormComponent implements OnInit, QuestionFormInterface {
  @Input() question: Question;
  @Input() status: QuestionStatus;

  @Output() questionChanged: EventEmitter<Partial<Question>> = new EventEmitter<Partial<Question>>();

  form: FormGroup;
  questionStatus = QuestionStatus;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: [{ value: '', disabled: true }],
      options: [''],
      answer: ['', [Validators.required]]
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
}
