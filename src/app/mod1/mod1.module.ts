import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vu1Component } from './vu1/vu1.component';
import { Vu2Component } from './vu2/vu2.component';
import { ChildAComponent} from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    Vu1Component,
    Vu2Component,
    ChildAComponent,
    ChildBComponent,
    Page1Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Mod1Module { }
