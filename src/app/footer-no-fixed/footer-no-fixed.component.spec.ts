import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNoFixedComponent } from './footer-no-fixed.component';

describe('FooterNoFixedComponent', () => {
  let component: FooterNoFixedComponent;
  let fixture: ComponentFixture<FooterNoFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNoFixedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNoFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
