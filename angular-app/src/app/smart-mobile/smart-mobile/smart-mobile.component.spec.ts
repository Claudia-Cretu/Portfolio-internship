import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMobileComponent } from './smart-mobile.component';

describe('SmartMobileComponent', () => {
  let component: SmartMobileComponent;
  let fixture: ComponentFixture<SmartMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
