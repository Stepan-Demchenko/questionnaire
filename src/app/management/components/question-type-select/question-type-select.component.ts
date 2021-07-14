import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-question-type-select',
  templateUrl: './question-type-select.component.html',
  styleUrls: ['./question-type-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTypeSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
