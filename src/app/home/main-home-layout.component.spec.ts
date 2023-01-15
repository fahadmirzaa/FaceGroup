import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeLayoutComponent } from './main-home-layout.component';

describe('MainHomePageComponent', () => {
  let component: MainHomeLayoutComponent;
  let fixture: ComponentFixture<MainHomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
