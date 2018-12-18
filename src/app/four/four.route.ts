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
    FourComponent
  } from './four.component';
  
  const routes: Routes = [{
      path: '',
      component: FourComponent,
      children: [{
          path: 'four-child1',
          component: Child1Component
        },
        {
          path: 'four-child2',
          component: Child2Component
        }
      ]
    },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FourtRoutingModule {}
  