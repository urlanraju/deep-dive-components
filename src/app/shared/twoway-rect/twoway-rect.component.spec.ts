import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayRectComponent } from './twoway-rect.component';

describe('TwowayRectComponent', () => {
  let component: TwowayRectComponent;
  let fixture: ComponentFixture<TwowayRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowayRectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowayRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
