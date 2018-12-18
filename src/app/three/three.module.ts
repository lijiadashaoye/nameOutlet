import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  ThreeComponent
} from './three.component';
import {
  Child1Component
} from './child1/child1.component';
import {
  ThreeRoutingModule
} from './three.route'
@NgModule({
  imports: [
    CommonModule,
    ThreeRoutingModule
  ],
  declarations: [ThreeComponent, Child1Component]
})
export class ThreeModule {}
