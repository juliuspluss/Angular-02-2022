import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UusInimeneComponent } from './uus-inimene.component';

describe('UusInimeneComponent', () => {
  let component: UusInimeneComponent;
  let fixture: ComponentFixture<UusInimeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UusInimeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UusInimeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
