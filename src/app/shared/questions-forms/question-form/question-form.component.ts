import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionType } from '@shared/enums/question-type';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionFormComponent implements OnInit {
  @Input() type: QuestionType = QuestionType.Multiple;
  @Input() question: Question;

  form: FormGroup;
  questionType = QuestionType;

  @Output() submittedForm: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    if (this.question) {
      this.form.patchValue(this.question);
    }
  }

  trackByFn = (index: number) => index;

  get optionsFormArray(): FormArray {
    return this.form.controls.options as FormArray;
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      options: this.fb.array([])
    });
    if (this.type !== this.questionType.Open) {
      this.addOption();
      this.addOption();
    }
  }

  addOption(): void {
    (this.form.controls['options'] as FormArray).push(
      this.fb.group({
        id: [Math.random().toString(36).substring(7)],
        title: ['', [Validators.required, Validators.minLength(4)]]
      })
    );
  }

  removeOption(index: number): void {
    this.optionsFormArray.removeAt(index);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submittedForm.emit({ ...this.question, ...this.form.value });
    }
  }
}
