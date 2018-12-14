import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private rout: Router) { }
  showTwo(type) {
    this.rout.navigate([type])
  }
  showOne(type) {
    this.rout.navigate([
      {
        outlets: {
          isOne: [type,{id:9}]
        }
      }
    ])
  }
  quxiao(num) {
    let arr=[];
    num==1?arr=[
      {
        outlets: {
          isOne: null
        }
      }
    ]:arr=[
      {
        outlets: {
          isThree: null
        }
      }
    ]
    this.rout.navigate(arr)
  }
  showThree(type) {
    this.rout.navigate([
      {
        outlets: {
          isThree: [type],
        }
      }
    ])
  }
  showBoth(){
    this.rout.navigate([
      {
        outlets: {
          'isThree': ['three'],
          'isOne': ['one']
        }
      }
    ])
  }
}
