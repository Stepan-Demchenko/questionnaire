import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from '@shared/models/question';
import { StoreService } from '@core/services/store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pairwise, startWith, takeUntil, tap } from 'rxjs/operators';
import { QuestionType } from '@shared/enums/question-type';
import { Router } from '@angular/router';
import { QuestionFormComponent } from '@shared/question-form/question-form/question-form.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit, OnDestroy {
  @ViewChild('questionFormRef', {read: ViewContainerRef}) questionContainerRef: ViewContainerRef;

  form: FormGroup;
  questionType = QuestionType;

  private destroy$ = new Subject<void>();

  constructor(private readonly storeService: StoreService,
              private readonly router: Router,
              private readonly resolver: ComponentFactoryResolver,
              private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      type: [null, [Validators.required]]
    });
    this.form.valueChanges
      .pipe(
        startWith(null),
        pairwise(),
        tap(([previousValue, currentValue]: [{ type: QuestionType | null }, { type: QuestionType | null }]) => {
          if (previousValue !== currentValue) {
            this.createQuestionForm(currentValue.type);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  createQuestion(question: Question): void {
    this.storeService.add({
      ...question,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
    });
    this.router.navigate(['']);
  }

  private createQuestionForm(type: QuestionType): void {
    this.questionContainerRef.clear();
    const factory = this.resolver.resolveComponentFactory(QuestionFormComponent);
    const componentRef = this.questionContainerRef.createComponent(factory);
    componentRef.instance.type = type;
    componentRef.instance.submittedForm
      .pipe(takeUntil(this.destroy$))
      .subscribe((question: Question) => (this.createQuestion(question)));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
