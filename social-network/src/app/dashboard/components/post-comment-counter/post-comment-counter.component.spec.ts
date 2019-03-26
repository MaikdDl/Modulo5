import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentCounterComponent } from './post-comment-counter.component';

describe('PostCommentCounterComponent', () => {
  let component: PostCommentCounterComponent;
  let fixture: ComponentFixture<PostCommentCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
