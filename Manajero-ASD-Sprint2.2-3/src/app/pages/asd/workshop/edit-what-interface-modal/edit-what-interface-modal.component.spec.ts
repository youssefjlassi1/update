import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWhatInterfaceModalComponent } from './edit-what-interface-modal.component';

describe('EditWhatInterfaceModalComponent', () => {
  let component: EditWhatInterfaceModalComponent;
  let fixture: ComponentFixture<EditWhatInterfaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWhatInterfaceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWhatInterfaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
