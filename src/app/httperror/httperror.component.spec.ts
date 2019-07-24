import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPErrorComponent } from './httperror.component';

describe('HTTPErrorComponent', () => {
  let component: HTTPErrorComponent;
  let fixture: ComponentFixture<HTTPErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
