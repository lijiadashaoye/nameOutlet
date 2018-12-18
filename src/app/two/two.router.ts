import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  NgModule
} from '@angular/core';

import {
  Child1Component
} from './two_child1/child1.component';
import {
  TwoComponent
} from './two.component';

const routes: Routes = [{
    path: '',
    component: TwoComponent,
    children: [{
        path: 'two-child1',
        component: Child1Component
      },
      {
        path: 'two-child2',
        loadChildren:'./two_child2/child2.module#TwoChild2Module'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule {}
