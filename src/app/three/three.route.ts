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
    ThreeComponent
  } from './three.component';
  
  const routes: Routes = [{
      path: '',
      component: ThreeComponent,
      children: [{
          path: 'three-child1',
          component: Child1Component
        },
        {
          path: 'three-child2',
          loadChildren:'./child2/child2.module#ThreeChild2Module',
          outlet:'three_outlet'
        },
        {
            path: 'three-child3',
            loadChildren:'./child3/child3.module#ThreeChild3Module',
          },
      ]
    },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ThreeRoutingModule {}
  