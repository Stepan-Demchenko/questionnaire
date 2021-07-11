import { QuestionType } from '@shared/enums/question-type';

export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  options: Option[];
  answer?: Option[] | string;
  createdAt: Date;
}

export interface Option {
  id: string;
  title: string;
  checked?: boolean;
}
