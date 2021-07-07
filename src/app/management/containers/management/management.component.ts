import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StoreService } from '@core/services/store.service';
import { Observable } from 'rxjs';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagementComponent implements OnInit {
  questions$: Observable<Question[]>;

  constructor(private readonly storeService: StoreService) { }

  ngOnInit(): void {
    this.questions$ = this.storeService.getAll();
  }

}
