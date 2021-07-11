import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Option, Question } from '@shared/models/question';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionType } from '@shared/enums/question-type';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-answer-question-form',
  templateUrl: './answer-question-form.component.html',
  styleUrls: ['./answer-question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerQuestionFormComponent implements OnInit, OnDestroy {
  @Input() question: Question;
  @Input() status: 'answered' | 'unanswered' = 'unanswered';
  @Output() questionChanged: EventEmitter<Question> = new EventEmitter<Question>();

  form: FormGroup;
  questionType = QuestionType;
  private destroy$ = new Subject<void>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  get optionsFormArray(): FormArray {
    return this.form.controls.options as FormArray;
  }

  private initializeForm(): void {
    const options = this.question.options.map(option =>
      this.fb.group({
        id: [{ value: option.id, disabled: true }],
        title: [{ value: option.title, disabled: true }]
      })
    );
    this.form = this.fb.group({
      title: [{ value: '', disabled: true }],
      options: this.fb.array(options),
      answer:
        this.question.type === QuestionType.Multiple
          ? this.fb.array(
              this.question.options.map(() =>
                this.fb.group({
                  id: [{ value: '', disabled: true }],
                  title: [{ value: '', disabled: true }],
                  checked: [false]
                })
              )
            )
          : ['']
    });
    this.form.patchValue(this.question);
    if (this.status === 'answered') {
      this.form.disable();
    }
  }

  selectOption(option: Option): void {
    if (this.question.type !== QuestionType.Multiple) {
      this.form.get('answer').setValue([option]);
    }
  }

  accept(): void {
    this.questionChanged.emit({ ...this.question, ...this.form.value });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
