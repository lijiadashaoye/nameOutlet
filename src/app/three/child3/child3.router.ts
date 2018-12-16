import {
    Routes,
    RouterModule
  } from '@angular/router';
  import {
    NgModule
  } from '@angular/core';
  
  import { Child3Component } from './child3.component';
  import { Com1Component } from './com1/com1.component';
  import { Com2Component } from './com2/com2.component';
  
  
  const routes: Routes = [{
      path: '',
      component: Child3Component,
      children: [{
          path: 'child3-com1',
          component: Com1Component
        },
        {
          path: 'child3-com2',
          component: Com2Component
        }
      ]
    },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class Child3RoutingModule {}
  