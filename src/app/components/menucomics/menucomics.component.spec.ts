import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucomicsComponent } from './menucomics.component';

describe('MenucomicsComponent', () => {
  let component: MenucomicsComponent;
  let fixture: ComponentFixture<MenucomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenucomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
