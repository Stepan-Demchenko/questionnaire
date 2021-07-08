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

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
    if (this.question) {
      this.form.patchValue(this.question);
    }
  }


  get optionsFormArray(): FormArray {
    return this.form.controls.options as FormArray;
  }

  private initializeForm(): void {
    switch (this.type) {
      case QuestionType.Multiple:
        this.createCheckBoxQuestionForm();
        break;
      case QuestionType.Single:
        this.createSingleOptionQuestionForm();
        break;
      case QuestionType.Open:
        this.form = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(10)]],
          answer: ['']
        });
    }
  }


  private createCheckBoxQuestionForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      options: this.fb.array([])
    });
    this.addMultipleChoiceOption();
    this.addMultipleChoiceOption();
  }

  private createSingleOptionQuestionForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      options: this.fb.array([
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required])]),
      answer: ['']
    });
  }

  private addMultipleChoiceOption(): void {
    (this.form.controls['options'] as FormArray).push(this.fb.group({
      title: ['', Validators.required],
      checked: [false],
    }));
  }

  private addSingleChoiceOption(): void {
    (this.form.controls['options'] as FormArray).push(this.fb.control('', [Validators.required]));
  }

  addOption(): void {
    if (this.type === QuestionType.Multiple) {
      this.addMultipleChoiceOption();
    } else if (this.type === QuestionType.Single) {
      this.addSingleChoiceOption();
    }
  }

  onSubmit(): void {
    this.submittedForm.emit({...this.form.value, type: this.type});
  }
}
