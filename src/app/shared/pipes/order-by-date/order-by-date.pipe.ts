import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '@shared/enums/order.enum';
import { Question } from '@shared/models/question';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(questions: Question[], order: Order): Question[] {
    return questions.sort((a: Question, b: Question) => {
      if (+order === Order.ASC) {
        // @ts-ignore
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      // @ts-ignore
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  }

}
