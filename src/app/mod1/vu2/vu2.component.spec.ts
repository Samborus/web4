import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vu2Component } from './vu2.component';

describe('Vu2Component', () => {
  let component: Vu2Component;
  let fixture: ComponentFixture<Vu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vu2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
