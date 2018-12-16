import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  constructor(
    public route: Router,
    public act: ActivatedRoute
  ) {}

  tochild1() {
    this.route.navigate(['com1'], {
      relativeTo: this.act
    })
  }
  tochild2() {
    this.route.navigate(['com2'], {
      relativeTo: this.act
    })
  }
}
