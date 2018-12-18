import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  Child2RoutingModule
} from './child2.route'

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
  imports: [CommonModule, Child2RoutingModule],
  exports: [],
  providers: [],
})
export class ThreeChild2Module {}
