import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '@shared/models/question';
import { QuestionStatus } from '@shared/enums/question-status';

@Pipe({
  name: 'sortByStatus'
})
export class SortByStatusPipe implements PipeTransform {
  transform(questions: Question[], type: QuestionStatus): Question[] {
    if (type === QuestionStatus.Answered) {
      return questions.filter((question: Question) => !!question.answer);
    }
    return questions.filter((question: Question) => !question.answer);
  }
}
