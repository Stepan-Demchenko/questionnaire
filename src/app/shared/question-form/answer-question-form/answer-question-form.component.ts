import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Option, Question } from '@shared/models/question';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { minSelectedCheckboxes } from '@shared/question-form/validators/min-selected-options.validator';
import { QuestionType } from '@shared/enums/question-type';

@Component({
  selector: 'app-answer-question-form',
  templateUrl: './answer-question-form.component.html',
  styleUrls: ['./answer-question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerQuestionFormComponent implements OnInit {
  @Input() question: Question;
  form: FormGroup;
  questionType = QuestionType;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  get optionsFormArray(): FormArray {
    return this.form.controls.options as FormArray;
  }

  private createForm(): void {
    this.form = this.fb.group({
      title: [''],
      options: [''],
      answer: ['']
    });
    this.form.patchValue(this.question);

    console.log(this.form.value);
    this.form.valueChanges.subscribe(v => console.log(v));
  }
}
