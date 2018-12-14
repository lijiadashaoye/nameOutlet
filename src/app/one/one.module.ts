import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import { OneChildComponent } from './one-child/one-child.component';
import { OneRoutingModule } from './one.route';
import { OneChild2Component } from './one-child2/one-child2.component'

@NgModule({
  declarations: [
    OneComponent,
    OneChildComponent,
    OneChild2Component
  ],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class OneModule { }
