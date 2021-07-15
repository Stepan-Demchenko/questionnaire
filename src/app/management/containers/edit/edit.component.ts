import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Question } from '@shared/models/question';
import { StoreService } from '@core/services/store.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent {
  readonly question$: Observable<Question | boolean> = this.activatedRoute.data.pipe(
    map((data: { question: Question }) => data.question)
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly storeService: StoreService,
    private readonly router: Router
  ) {}

  updateQuestion(question: Question): void {
    this.storeService.edit(question);
    this.router.navigate(['/manage']);
  }
}
