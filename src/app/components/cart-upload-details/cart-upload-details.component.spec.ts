import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUploadDetailsComponent } from './cart-upload-details.component';

describe('CartUploadDetailsComponent', () => {
  let component: CartUploadDetailsComponent;
  let fixture: ComponentFixture<CartUploadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartUploadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartUploadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
