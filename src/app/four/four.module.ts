import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FourComponent
} from './four.component'
import {
  Child1Component
} from './child1/child1.component';
import {
  Child2Component
} from './child2/child2.component';
import {
  FourtRoutingModule
} from './four.route'
@NgModule({
  imports: [
    CommonModule,
    FourtRoutingModule
  ],
  declarations: [

    Child1Component, 
    Child2Component,
    FourComponent, 
  ]
})
export class FourModule {}
