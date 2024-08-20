import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretrospectiveComponent } from './addretrospective.component';

describe('AddretrospectiveComponent', () => {
  let component: AddretrospectiveComponent;
  let fixture: ComponentFixture<AddretrospectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddretrospectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddretrospectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
