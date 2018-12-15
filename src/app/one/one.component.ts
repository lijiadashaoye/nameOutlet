import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private rout: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
    })
  }
  quxiao(type) {
    this.rout.navigate([type], { relativeTo: this.route })
    // this.rout.navigate([{ outlets: { isOne: ['one/child1'] } }])
    // this.rout.navigateByUrl("./(isOne:one//child1)");
  }
}
