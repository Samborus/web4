import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.less']
})
export class ChildAComponent implements OnInit {
userId = 'AAAA-1111';
  constructor(private activatedroute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      console.log(data.name);
  })
    
  }

}
