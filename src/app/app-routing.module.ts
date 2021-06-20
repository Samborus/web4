import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod1Module } from './mod1/mod1.module';
import { Vu1Component } from './mod1/vu1/vu1.component';
import { Vu2Component } from './mod1/vu2/vu2.component';
import { ErrorComponent } from './common/error/error.component';
import { ChildAComponent } from './mod1/child-a/child-a.component';
import { ChildBComponent } from './mod1/child-b/child-b.component';
import { Page1Component } from './mod1/page1/page1.component';

const routes: Routes = [
  { path: 'vu1', component: Vu1Component,
  children: [
    {
      path: 'child-a', // child route path
      component: ChildAComponent, // child route component that the router renders
      data: { id:'1', name:"aaaa" },
    },
    {
      path: 'child-b',
      component: ChildBComponent, // another child route component that the router renders
    },
  ],},
  { path: 'vu2', component: Page1Component},
  { path: '', component: Vu1Component},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } ),
            Mod1Module],
  exports: [RouterModule]
})
export class AppRoutingModule { }
