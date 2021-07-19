import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StoreService } from '@core/services/store.service';
import { Observable } from 'rxjs';

import { Question } from '@shared/models/question';
import { Order } from '@shared/enums/order.enum';
import { QuestionStatus } from '@shared/enums/question-status';
import { SelectOption } from '@shared/select/select/select.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  questions$: Observable<Question[]>;
  questionStatus = QuestionStatus;

  orderAnswered: Order = Order.ASC;
  orderUnanswered: Order = Order.ASC;
  order = Order;

  sortOptions: SelectOption[] = [
    {
      title: 'Newest',
      value: Order.ASC
    },
    {
      title: 'Oldest',
      value: Order.DESC
    }
  ];

  constructor(private readonly store: StoreService) {}

  ngOnInit(): void {
    this.questions$ = this.store.getAll();
  }

  answerToQuestion(question: Question): void {
    this.store.edit(question);
  }

  trackByFn = (index, question: Question) => question.id;

  revertQuestion(question: Question): void {
    this.store.revert(question);
  }
}
