import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeYourOwnUserComponent } from './make-your-own-user.component';

describe('MakeYourOwnUserComponent', () => {
  let component: MakeYourOwnUserComponent;
  let fixture: ComponentFixture<MakeYourOwnUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeYourOwnUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeYourOwnUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
