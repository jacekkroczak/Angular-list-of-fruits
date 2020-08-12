import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JkListComponent } from './jk-list.component';

describe('JkListComponent', () => {
  let component: JkListComponent;
  let fixture: ComponentFixture<JkListComponent>;

  beforeEach(async(() => {
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
