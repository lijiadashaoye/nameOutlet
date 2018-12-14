import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
    { path: 'two', component: TwoComponent },
    {
        path: 'one', loadChildren: './one/one.module#OneModule',
        outlet: 'isOne'
    },
    { path: 'three', component: ThreeComponent,outlet:'isThree' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
