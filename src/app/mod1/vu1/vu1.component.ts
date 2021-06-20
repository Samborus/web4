import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vu1',
  templateUrl: './vu1.component.html',
  styleUrls: ['./vu1.component.less']
})
export class Vu1Component implements OnInit {

  private name:string = '';
  constructor(
      private route: ActivatedRoute,
    ) { }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
      });
    }

}
