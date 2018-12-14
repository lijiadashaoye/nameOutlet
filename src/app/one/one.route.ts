import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OneComponent } from './one.component';
import { OneChildComponent } from './one-child/one-child.component'
import { OneChild2Component } from './one-child2/one-child2.component'

const routes: Routes = [
    {
        path: '', component: OneComponent, children: [
            { path: 'child1', component: OneChildComponent,outlet:'isOne' },
            { path: 'child2', component: OneChild2Component }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OneRoutingModule { }
