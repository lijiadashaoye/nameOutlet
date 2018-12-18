import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  TwoComponent
} from './two.component'
import {
  Child1Component
} from './two_child1/child1.component';
import {
  TwoRoutingModule
} from './two.router'
@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [
    Child1Component, 
    TwoComponent, 
  ]
})
export class TwoModule {}
