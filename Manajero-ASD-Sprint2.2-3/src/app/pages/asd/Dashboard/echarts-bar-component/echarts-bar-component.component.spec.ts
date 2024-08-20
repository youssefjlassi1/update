import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarComponentComponent } from './echarts-bar-component.component';

describe('EchartsBarComponentComponent', () => {
  let component: EchartsBarComponentComponent;
  let fixture: ComponentFixture<EchartsBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartsBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartsBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
