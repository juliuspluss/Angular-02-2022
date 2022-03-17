import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksikInimeneComponent } from './yksik-inimene.component';

describe('YksikInimeneComponent', () => {
  let component: YksikInimeneComponent;
  let fixture: ComponentFixture<YksikInimeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YksikInimeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YksikInimeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
