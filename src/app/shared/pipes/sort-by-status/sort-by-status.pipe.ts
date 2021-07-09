import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '@shared/models/question';

@Pipe({
  name: 'sortByStatus'
})
export class SortByStatusPipe implements PipeTransform {

  transform(questions: Question[], type: 'answered' | 'unanswered'): Question[] {
    return questions.filter((question: Question) => {
      if (type === 'answered') {
        return question.answer?.length;
      }
      return !question.answer?.length;
    });
  }
}
