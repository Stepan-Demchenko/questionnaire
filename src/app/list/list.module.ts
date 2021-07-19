import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './containers/list/list.component';
import { CardModule } from '@shared/card/card.module';
import { SortByStatusModule } from '@shared/pipes/sort-by-status/sort-by-status.module';
import { FormsModule } from '@angular/forms';
import { OrderByDateModule } from '@shared/pipes/order-by-date/order-by-date.module';
import {ButtonModule} from "@shared/button/button.module";
import { SelectModule } from '@shared/select/select.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    CardModule,
    SortByStatusModule,
    FormsModule,
    OrderByDateModule,
    ButtonModule,
    SelectModule
  ]
})
export class ListModule { }
