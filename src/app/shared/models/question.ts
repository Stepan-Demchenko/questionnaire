import { QuestionType } from '@shared/enums/question-type';

export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  options: Option[] | string[];
  answer?: string;
  status: 'answered' | 'unanswered';
  createdAt: Date;
}

export interface Option {
  title: string;
  checked: boolean;
}
