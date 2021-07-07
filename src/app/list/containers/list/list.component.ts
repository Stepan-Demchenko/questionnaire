import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StoreService } from '@core/services/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor(private readonly store: StoreService) {
  }

  ngOnInit(): void {
    this.store.getAll().subscribe((v) => {
      console.log(v);
    });
  }

}
