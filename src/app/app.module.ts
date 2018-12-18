import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
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
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
