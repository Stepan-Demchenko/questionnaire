import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() question: Question;
  @Input() isDisableForm: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
