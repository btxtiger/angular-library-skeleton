import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibComponent } from './ngx-lib.component';

describe('NgxLibComponent', () => {
  let component: NgxLibComponent;
  let fixture: ComponentFixture<NgxLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxLibComponent]
    });
    fixture = TestBed.createComponent(NgxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
