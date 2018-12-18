import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  TwoChild2RoutingModule
} from './two_child2.router'

import {
  Com1Component
} from './com1/com1.component'
import {
  Com2Component
} from './com2/com2.component'
import {
  Child2Component
} from './child2.component'

@NgModule({
  declarations: [
    Com1Component,
    Com2Component,
    Child2Component
  ],
  imports: [CommonModule, TwoChild2RoutingModule],
  exports: [],
  providers: [],
})
export class TwoChild2Module {}
