import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationProgressComponentComponent } from './iteration-progress-component.component';

describe('IterationProgressComponentComponent', () => {
  let component: IterationProgressComponentComponent;
  let fixture: ComponentFixture<IterationProgressComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterationProgressComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IterationProgressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
