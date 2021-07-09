import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StoreService } from '@core/services/store.service';
import { Observable } from 'rxjs';
import { Question } from '@shared/models/question';
import { Order } from '@shared/enums/order.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  questions$: Observable<Question[]>;

  orderAnswered: Order = Order.ASC;
  orderUnanswered: Order = Order.ASC;
  order = Order;

  constructor(private readonly store: StoreService) {
  }

  ngOnInit(): void {
    this.questions$ = this.store.getAll();
  }
}
