import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWhatifInterfaceModalComponent } from './edit-whatif-interface-modal.component';

describe('EditWhatifInterfaceModalComponent', () => {
  let component: EditWhatifInterfaceModalComponent;
  let fixture: ComponentFixture<EditWhatifInterfaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWhatifInterfaceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWhatifInterfaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
