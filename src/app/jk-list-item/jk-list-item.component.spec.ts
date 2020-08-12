import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JkListItemComponent } from './jk-list-item.component';

describe('JkListItemComponent', () => {
  let component: JkListItemComponent;
  let fixture: ComponentFixture<JkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
