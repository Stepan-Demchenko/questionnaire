import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { QuestionFormInterface } from '@shared/questions-forms/question-form';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionStatus } from '@shared/enums/question-status';
import { Option, Question } from '@shared/models/question';
import { minSelectedCheckboxes } from '@shared/questions-forms/validators/min-selected-options.validator';

@Component({
  selector: 'app-multiple-question-form',
  templateUrl: './multiple-question-form.component.html',
  styleUrls: ['./multiple-question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleQuestionFormComponent implements OnInit, QuestionFormInterface {
  @Input() question: Question;
  @Input() status: QuestionStatus;

  @Output() questionChanged: EventEmitter<Partial<Question>> = new EventEmitter<Partial<Question>>();

  form: FormGroup;
  questionStatus = QuestionStatus;

  constructor(private readonly fb: FormBuilder) {}

  get optionsFormArray(): FormArray {
    return this.form.controls.answer as FormArray;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    const answerOptions = this.question.options.map((option: Option) =>
      this.fb.group({
        id: [option.id],
        title: [option.title],
        checked: [option.checked]
      })
    );

    this.form = this.fb.group({
      title: [{ value: '', disabled: true }],
      options: [''],
      answer: this.fb.array(answerOptions, minSelectedCheckboxes(1))
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
