import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JkScrollToTopComponent } from './jk-scroll-to-top.component';

describe('JkScrollToTopComponent', () => {
  let component: JkScrollToTopComponent;
  let fixture: ComponentFixture<JkScrollToTopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JkScrollToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JkScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
