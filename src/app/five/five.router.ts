import {
    Routes,
    RouterModule
  } from '@angular/router';
  import {
    NgModule
  } from '@angular/core';
  
  import {
    Child1Component
  } from './child1/child1.component';
  import {
    Child2Component
  } from './child2/child2.component';
  import {
    FiveComponent
  } from './five.component'
  
  const routes: Routes = [{
      path: '',
      component: FiveComponent,
      children: [{
          path: 'child1',
          component: Child1Component
        },
        {
          path: 'child2',
          component: Child2Component
        }
      ]
    },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FiveRoutingModule {}
  