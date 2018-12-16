import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  OneComponent
} from './one/one.component';

import {
  AppRoutingModule
} from './app.route';
import { CanvansComComponent } from './canvans-com/canvans-com.component'
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    CanvansComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
