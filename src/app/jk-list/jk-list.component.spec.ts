import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JkListComponent } from './jk-list.component';

describe('JkListComponent', () => {
  let component: JkListComponent;
  let fixture: ComponentFixture<JkListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
