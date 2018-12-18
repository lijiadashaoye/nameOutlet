import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>
    默认插槽懒加载模块FourModule内的组件2
    </p>
  `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
