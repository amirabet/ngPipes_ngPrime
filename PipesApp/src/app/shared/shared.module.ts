import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgComponentsModule } from '../prime-ng-components/prime-ng-components.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgComponentsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
