import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterfaceModalComponent } from './edit-interface-modal.component';

describe('EditInterfaceModalComponent', () => {
  let component: EditInterfaceModalComponent;
  let fixture: ComponentFixture<EditInterfaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInterfaceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInterfaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
