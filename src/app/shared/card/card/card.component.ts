import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Question } from '@shared/models/question';
import { QuestionType } from '@shared/enums/question-type';
import { QuestionFormInterface } from '@shared/questions-forms/question-form';
import { OpenQuestionFormComponent } from '@shared/questions-forms/open-question-form/open-question-form.component';
import { SingleQuestionFormComponent } from '@shared/questions-forms/single-question-form/single-question-form.component';
import { MultipleQuestionFormComponent } from '@shared/questions-forms/multiple-question-form/multiple-question-form.component';
import { QuestionStatus } from '@shared/enums/question-status';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('questionFormRef', { read: ViewContainerRef }) questionContainerRef: ViewContainerRef;

  @Input() question: Question;
  @Input() statusQuestion: QuestionStatus;

  @Output() answeredQuestion: EventEmitter<Question> = new EventEmitter<Question>();
  @Output() revertQuestion: EventEmitter<boolean> = new EventEmitter<boolean>();

  questionStatus = QuestionStatus;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createQuestionForm();
  }

  answered(question: Question): void {
    this.answeredQuestion.emit(question);
  }

  revert(): void {
    this.revertQuestion.emit(true);
  }

  createQuestionForm(): void {
    let factory: ComponentFactory<QuestionFormInterface>;
    let componentRef: ComponentRef<QuestionFormInterface>;
    this.questionContainerRef.clear();
    switch (this.question.type) {
      case QuestionType.Open: {
        factory = this.componentFactoryResolver.resolveComponentFactory(OpenQuestionFormComponent);
        break;
      }
      case QuestionType.Single: {
        factory = this.componentFactoryResolver.resolveComponentFactory(SingleQuestionFormComponent);

        break;
      }
      case QuestionType.Multiple: {
        factory = this.componentFactoryResolver.resolveComponentFactory(MultipleQuestionFormComponent);
        break;
      }
    }
    componentRef = this.questionContainerRef.createComponent(factory);
    componentRef.instance.question = this.question;
    componentRef.instance.status = this.statusQuestion;
    this.cdr.detectChanges();
    componentRef.instance.questionChanged
      .pipe(takeUntil(this.destroy$))
      .subscribe((answerOfQuestion: Question) => this.answeredQuestion.emit(answerOfQuestion));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
