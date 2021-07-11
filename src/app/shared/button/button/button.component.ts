import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() typeOfButton: 'submit' | 'button' | 'reset' = 'button';
  @Input() isDisabled = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
