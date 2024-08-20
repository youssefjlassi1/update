import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsPieComponentComponent } from './echarts-pie-component.component';

describe('EchartsPieComponentComponent', () => {
  let component: EchartsPieComponentComponent;
  let fixture: ComponentFixture<EchartsPieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartsPieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartsPieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
