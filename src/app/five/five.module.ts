import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FiveComponent
} from './five.component'
import {
  Child1Component
} from './child1/child1.component';
import {
  Child2Component
} from './child2/child2.component';
import {
  FiveRoutingModule
} from './five.router'
@NgModule({
  imports: [
    CommonModule,
    FiveRoutingModule
  ],
  declarations: [
    Child1Component, 
    Child2Component,
    FiveComponent, 
  ]
})
export class FiveModule {}
