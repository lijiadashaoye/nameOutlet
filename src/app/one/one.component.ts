import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private rout: Router, private active_route: ActivatedRoute, ) { }

  ngOnInit() {
    this.active_route.paramMap.subscribe(params => {
      console.log(params.get('id'))
    })
  }
  quxiao(type) {
    // relativeTo:this.active_route 表示从当前激活的路由开始进行导航定位
    // replaceUrl: true 导航时不要把当前状态记入历史
    // onSameUrlNavigation: 'reload':定义当路由器收到一个导航到当前URL的请求时执行刷新页面
    this.rout.navigate([type], { relativeTo: this.active_route })
  }
}
