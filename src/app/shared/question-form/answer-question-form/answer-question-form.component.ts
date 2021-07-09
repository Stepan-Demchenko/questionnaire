import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Question } from '@shared/models/question';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionType } from '@shared/enums/question-type';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-answer-question-form',
  templateUrl: './answer-question-form.component.html',
  styleUrls: ['./answer-question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerQuestionFormComponent implements OnInit, OnDestroy {
  @Input() question: Question;
  @Output() questionChanged: EventEmitter<Question> = new EventEmitter<Question>();

  form: FormGroup;
  questionType = QuestionType;
  private destroy$ = new Subject<void>();

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  get optionsFormArray(): FormArray {
    return this.form.controls.options as FormArray;
  }

  private createForm(): void {
    const options = this.question.options.map(option => this.fb.group({id: [option.id], title: [option.title]}));
    this.form = this.fb.group({
      title: [{value: '', disabled: true}],
      options: this.fb.array(options),
      answer: ['']
    });
    this.form.patchValue(this.question);
    if (!this.question.answer) {
      this.form.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe((question: Question) => this.questionChanged.emit(question));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
