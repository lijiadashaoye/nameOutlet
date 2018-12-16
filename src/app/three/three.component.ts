import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-three',
  template: `
  <h3>默认插槽懒加载模块：ThreeModule</h3>
  <button (click)="tochild1()">three-child1</button>
  <button (click)="tochild2()">three-child2</button>
  <button (click)="tochild3()">three-child3</button>
  <router-outlet></router-outlet>
  <router-outlet name="three_outlet"></router-outlet>
  
  `,
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {
  constructor(
    public route: Router,
    public act: ActivatedRoute
  ) {}

  tochild1() {
    this.route.navigate(['three-child1'], {
      relativeTo: this.act
    })
  }
  tochild2() {
    this.route.navigate([{
      outlets: {
        three_outlet: ['three-child2']
      }
    }], {
      relativeTo: this.act
    })
  }
  tochild3() {
    this.route.navigate(['three-child3'], {
      relativeTo: this.act
    })
  }
}
