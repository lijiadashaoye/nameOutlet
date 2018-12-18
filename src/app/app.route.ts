import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  NgModule
} from '@angular/core';
import {
  OneComponent
} from './one/one.component';

const routes: Routes = [{
    path: 'one',
    component: OneComponent,
    data:{id:'one'}
  },
  {
    path: 'two',
    loadChildren: './two/two.module#TwoModule',
    outlet: 'isTwo'
  },
  {
    path: 'three',
    loadChildren: './three/three.module#ThreeModule',
    data:{id:'three'}
  },
  {
    path: 'four',
    loadChildren: './four/four.module#FourModule',
    data:{id:'four'}
  },
  {
    path: 'five',
    loadChildren: './five/five.module#FiveModule',
    outlet: 'isFive'
  },
  // {
  //   path: '',
  //   redirectTo: 'one',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   component: OneComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
