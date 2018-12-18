import {
    Routes,
    RouterModule
  } from '@angular/router';
  import {
    NgModule
  } from '@angular/core';
  
  import {Com1Component }from './com1/com1.component'
  import {Com2Component }from './com2/com2.component'
  import {Child2Component} from './child2.component'
  
  const routes: Routes = [{
      path: '',
      component: Child2Component,
      children: [{
          path: 'two-child2-com1',
          component: Com1Component
        },
        {
          path: 'two-child2-com2',
          component: Com2Component
        }
      ]
    },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TwoChild2RoutingModule {}
  