import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBanerComponent } from './header-baner.component';

describe('HeaderBanerComponent', () => {
  let component: HeaderBanerComponent;
  let fixture: ComponentFixture<HeaderBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
