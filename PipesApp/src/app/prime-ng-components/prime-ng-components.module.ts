import { NgModule } from '@angular/core';

import { Button, ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  exports: [
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeNgComponentsModule { }
