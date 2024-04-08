import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';
import { PrimeNgComponentsModule } from '../prime-ng-components/prime-ng-components.module';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonsPageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgComponentsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
