import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StoreService } from '@core/services/store.service';
import { Question } from '@shared/models/question';
import { mapTo, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditQuestionResolver implements Resolve<Question | boolean> {
  constructor(private readonly storeService: StoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question | boolean> {
    const idOfQuestion: string = route.paramMap.get('id');
    if (idOfQuestion) {
      return this.storeService.getOne(idOfQuestion).pipe(take(1));
    }
    return of(true);
  }
}
