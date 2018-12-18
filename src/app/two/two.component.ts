import {
  Component
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  constructor(
    public route: Router,
    public act: ActivatedRoute
  ) {}
  tochild1() {
    this.route.navigate(['two-child1'], {
      relativeTo: this.act
    })
  }
  tochild2() {
    this.route.navigate(['two-child2'], {
      relativeTo: this.act
    })
  }
}
