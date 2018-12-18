import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  constructor(
    public route: Router,
    public act: ActivatedRoute
  ) {}

  tochild1() {
    this.route.navigate(['child3-com1'], {
      relativeTo: this.act
    })
  }
  tochild2() {
    this.route.navigate(['child3-com2'], {
      relativeTo: this.act
    })
  }
}
