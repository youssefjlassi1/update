import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditerationComponent } from './additeration.component';

describe('AdditerationComponent', () => {
  let component: AdditerationComponent;
  let fixture: ComponentFixture<AdditerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
