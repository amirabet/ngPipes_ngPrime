import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    MenubarModule,
    PanelModule
  ]
})
export class PrimeNgComponentsModule { }
