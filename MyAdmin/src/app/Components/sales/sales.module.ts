import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { OrderComponent } from './order/order.component';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  declarations: [
    OrderComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
