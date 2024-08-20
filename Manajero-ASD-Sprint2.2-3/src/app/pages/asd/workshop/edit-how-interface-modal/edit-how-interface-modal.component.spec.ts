import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHowInterfaceModalComponent } from './edit-how-interface-modal.component';

describe('EditHowInterfaceModalComponent', () => {
  let component: EditHowInterfaceModalComponent;
  let fixture: ComponentFixture<EditHowInterfaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHowInterfaceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHowInterfaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
