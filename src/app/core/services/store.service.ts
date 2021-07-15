import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '@core/consts/local-storage';
import { Question } from '@shared/models/question';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly QUESTION_KEY = 'questions';
  private questions = new BehaviorSubject<Question[] | null>([]);
  private stream: Observable<Question[] | null> = this.questions.asObservable();

  constructor(@Inject(LocalStorage) private readonly localStorage: Storage) {}

  getAll(): Observable<Question[] | null> {
    this.questions.next(JSON.parse(this.localStorage.getItem(this.QUESTION_KEY)));
    return this.stream;
  }

  getOne(id: string): Observable<Question | undefined> {
    this.questions.next(JSON.parse(this.localStorage.getItem(this.QUESTION_KEY)));
    return this.stream.pipe(map((questions: Question[] | null) => questions.find((question: Question) => question.id === id)));
  }

  add(question: Question): void {
    const allQuestions: Question[] | null = JSON.parse(this.localStorage.getItem(this.QUESTION_KEY));
    if (allQuestions && allQuestions.length) {
      allQuestions.push(question);
      this.updateLocalStorageAndStream(allQuestions);
      return;
    }
    this.localStorage.setItem(this.QUESTION_KEY, JSON.stringify([question]));
  }

  edit(question: Question): void {
    const allQuestions: Question[] | null = JSON.parse(this.localStorage.getItem(this.QUESTION_KEY));
    const foundedIndex = allQuestions.findIndex((qs: Question) => qs.id === question.id);
    if (foundedIndex !== -1) {
      allQuestions[foundedIndex] = question;
      this.updateLocalStorageAndStream(allQuestions);
    }
  }

  revert(question: Question): void {
    const allQuestions: Question[] | null = JSON.parse(this.localStorage.getItem(this.QUESTION_KEY));
    const foundedIndex = allQuestions.findIndex((qs: Question) => qs.id === question.id);
    if (foundedIndex !== -1) {
      allQuestions[foundedIndex] = { ...allQuestions[foundedIndex], answer: undefined };
      this.updateLocalStorageAndStream(allQuestions);
    }
  }

  delete(id: string): void {
    const allQuestions: Question[] | null = JSON.parse(this.localStorage.getItem(this.QUESTION_KEY));
    const foundedIndex = allQuestions.findIndex((question: Question) => question.id === id);
    if (foundedIndex) {
      allQuestions.splice(foundedIndex);
      this.updateLocalStorageAndStream(allQuestions);
    }
  }

  private updateLocalStorageAndStream(questions: Question[] | []): void {
    this.localStorage.removeItem(this.QUESTION_KEY);
    this.localStorage.setItem(this.QUESTION_KEY, JSON.stringify(questions));
    this.questions.next(questions);
  }
}
