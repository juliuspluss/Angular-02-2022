import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuutmineComponent } from './muutmine.component';

describe('MuutmineComponent', () => {
  let component: MuutmineComponent;
  let fixture: ComponentFixture<MuutmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuutmineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuutmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
