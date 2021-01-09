import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUploadListComponent } from './cart-upload-list.component';

describe('CartUploadListComponent', () => {
  let component: CartUploadListComponent;
  let fixture: ComponentFixture<CartUploadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartUploadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartUploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
