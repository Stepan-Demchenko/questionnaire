import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Question } from '@shared/models/question';
import { Observable } from 'rxjs';
import { StoreService } from '@core/services/store.service';
import { shareReplay } from 'rxjs/operators';
import { QuestionStatus } from '@shared/enums/question-status';
import { SelectOption } from '@shared/select/select/select.component';
import { Order } from '@shared/enums/order.enum';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageComponent {
  readonly questions$: Observable<Question[] | []> = this.storeService.getAll().pipe(shareReplay(1));
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
  sort: Order = Order.ASC;


  questionStatus = QuestionStatus;

  constructor(private readonly storeService: StoreService) {}

  trackByFn = (index, question: Question) => question.id;

  removeQuestion(id: string): void {
    this.storeService.delete(id);
  }
}
