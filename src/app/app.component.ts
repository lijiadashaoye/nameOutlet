import {
  Component
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public route: Router,
    public act: ActivatedRoute
  ) {}
  toOne() {
    this.route.navigate(['one'], {
      relativeTo: this.act
    })
  }
  toFour() {
    this.route.navigate(['four'], {
      relativeTo: this.act
    })
  }

  toThree() {
    this.route.navigate(['three'], {
      relativeTo: this.act
    })
  }
  toTwo() {
    this.route.navigate([{
      outlets: {
        isTwo: ['two']
      }
    }], {
      relativeTo: this.act
    })
  }
  quxiaoTwo() {
    this.route.navigate([{
      outlets: {
        isTwo: null
      }
    }], {
      relativeTo: this.act
    })
  }
  toFive() {
    this.route.navigate([{
      outlets: {
        isFive: ['five']
      }
    }], {
      relativeTo: this.act
    })
  }
  quxiaoFive() {
    this.route.navigate([{
      outlets: {
        isFive: null
      }
    }], {
      relativeTo: this.act
    })
  }
  showBoth() {
    this.route.navigate([{
      outlets: {
        isFive: ['five', {
          id: 'five'
        }],
        isTwo: ['two', {
          id: 'two'
        }]
      }
    }], {
      relativeTo: this.act
    })
  }
  closeBoth() {
    this.route.navigate([{
      outlets: {
        isFive: null,
        isTwo:null
      }
    }], {
      relativeTo: this.act
    })
  }
}
