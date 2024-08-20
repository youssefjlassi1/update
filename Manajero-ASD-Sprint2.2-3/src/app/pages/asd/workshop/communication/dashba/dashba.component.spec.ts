import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaComponent } from './dashba.component';

describe('DashbaComponent', () => {
  let component: DashbaComponent;
  let fixture: ComponentFixture<DashbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
