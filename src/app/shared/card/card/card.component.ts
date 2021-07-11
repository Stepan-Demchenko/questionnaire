import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() question: Question;
  @Input() statusQuestion: 'answered' | 'unanswered' = 'unanswered';

  @Output() answeredQuestion: EventEmitter<Question> = new EventEmitter<Question>();
  @Output() revertQuestion: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  answered(question: Question): void {
    this.answeredQuestion.emit(question);
  }

  revert(): void {
    this.revertQuestion.emit(true);
  }
}
