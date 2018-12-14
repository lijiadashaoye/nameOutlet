import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit() {
  }
  quxiao(type) {
    // this.rout.navigate([{ outlets: { isOne: ['one/child1'] } }])
    this.rout.navigateByUrl("./(isOne:one//child1)");
  }
}
