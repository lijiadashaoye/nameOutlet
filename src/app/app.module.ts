import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoComponent } from './two/two.component';
import { AppRoutingModule } from './app.route';
import { ThreeComponent } from './three/three.component';
@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
    ThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
