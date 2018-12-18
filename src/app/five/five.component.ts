import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent  {
  constructor(
    public route: Router,
    public act: ActivatedRoute
  ) {}
  tochild1() {
    this.route.navigate(['child1'], {
      relativeTo: this.act
    })
  }
  tochild2(){
    this.route.navigate(['child2'], {
      relativeTo: this.act
    })
  }
}