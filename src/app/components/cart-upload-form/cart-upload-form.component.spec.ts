import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUploadFormComponent } from './cart-upload-form.component';

describe('CartUploadFormComponent', () => {
  let component: CartUploadFormComponent;
  let fixture: ComponentFixture<CartUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartUploadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
