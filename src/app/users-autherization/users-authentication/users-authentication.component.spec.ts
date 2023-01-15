import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAuthenticationComponent } from './users-authentication.component';

describe('UsersAuthenticationComponent', () => {
  let component: UsersAuthenticationComponent;
  let fixture: ComponentFixture<UsersAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
