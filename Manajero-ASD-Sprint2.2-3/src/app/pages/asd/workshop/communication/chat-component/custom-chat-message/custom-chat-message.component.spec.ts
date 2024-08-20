import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChatMessageComponent } from './custom-chat-message.component';

describe('CustomChatMessageComponent', () => {
  let component: CustomChatMessageComponent;
  let fixture: ComponentFixture<CustomChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChatMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
