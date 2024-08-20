import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRetroDetailsComponent } from './post-retro-details.component';

describe('PostRetroDetailsComponent', () => {
  let component: PostRetroDetailsComponent;
  let fixture: ComponentFixture<PostRetroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRetroDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRetroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
