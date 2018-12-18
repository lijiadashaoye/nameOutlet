import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-four',
  template: `
  <h3>默认插槽懒加载模块：FourModule</h3>
  <button (click)="tochild1()">four-child1</button>
  <button (click)="tochild2()">four-child2</button>
  <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./four.component.css']
})
export class FourComponent {
  constructor(
    public route: Router,
    public act: ActivatedRoute
  ) {}
  tochild1() {
    this.route.navigate(['four-child1'], {
      relativeTo: this.act
    })
  }
  tochild2() {
    this.route.navigate(['four-child2'], {
      relativeTo: this.act
    })
  }
}
