import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASDComponent } from './asd.component';

describe('ASDComponent', () => {
  let component: ASDComponent;
  let fixture: ComponentFixture<ASDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
