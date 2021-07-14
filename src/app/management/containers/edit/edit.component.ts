import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '@core/services/store.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly storeService: StoreService
  ) {}

  ngOnInit(): void {}
}
