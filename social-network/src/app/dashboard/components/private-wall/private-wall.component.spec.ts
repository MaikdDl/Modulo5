import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateWallComponent } from './private-wall.component';

describe('PrivateWallComponent', () => {
  let component: PrivateWallComponent;
  let fixture: ComponentFixture<PrivateWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
