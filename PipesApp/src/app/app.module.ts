import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

/*
*
* Configuración Locale de la App
* 
*/
import localeEsMx from '@angular/common/locales/es-MX'; 
import localeEs from '@angular/common/locales/es';
import localeJa from '@angular/common/locales/ja'; 
//
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsMx );
registerLocaleData( localeEs );
registerLocaleData( localeJa );
//
// En providers podemos setear el Locale de forma global en la aplicación

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
      ProductsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
