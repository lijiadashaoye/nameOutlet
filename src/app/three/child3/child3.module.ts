import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  Child3Component
} from './child3.component';
import {
  Com1Component
} from './com1/com1.component';
import {
  Com2Component
} from './com2/com2.component';
import {
  Child3RoutingModule
} from './child3.router'
@NgModule({
  imports: [
    CommonModule,
    Child3RoutingModule
  ],
  declarations: [Child3Component, Com1Component, Com2Component]
})
export class ThreeChild3Module {}
