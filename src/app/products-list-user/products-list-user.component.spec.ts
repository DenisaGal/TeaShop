import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListUserComponent } from './products-list-user.component';

describe('ProductsListUserComponent', () => {
  let component: ProductsListUserComponent;
  let fixture: ComponentFixture<ProductsListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
