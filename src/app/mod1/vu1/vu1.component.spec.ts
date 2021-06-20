import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vu1Component } from './vu1.component';

describe('Vu1Component', () => {
  let component: Vu1Component;
  let fixture: ComponentFixture<Vu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vu1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
