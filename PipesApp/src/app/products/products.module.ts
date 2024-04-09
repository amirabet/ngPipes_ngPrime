import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { PrimeNgComponentsModule } from '../prime-ng-components/prime-ng-components.module';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ReturnColorPipe } from './pipes/return-color.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    CustomPipeComponent,
    NumbersPageComponent,
    OrderPageComponent,
    UncommonsPageComponent,
    //Pipes
    CanFlyPipe,
    ToggleCasePipe,
    ReturnColorPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    PrimeNgComponentsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
