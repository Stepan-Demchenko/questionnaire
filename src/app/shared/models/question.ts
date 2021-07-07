import { QuestionType } from '@shared/enums/question-type';

export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  options: Option[];
  status: 'answered' | 'unanswered';
  createdAt: Date;
}

export interface Option {
  title: string;
  checked: boolean;
}
