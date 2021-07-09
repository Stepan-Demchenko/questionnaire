import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from '@shared/nav/nav.module';
import { LocalStorage } from '@core/consts/local-storage';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule
  ],
  providers: [
    {provide: LocalStorage, useValue: window.localStorage}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
