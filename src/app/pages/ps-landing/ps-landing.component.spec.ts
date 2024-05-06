import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsLandingComponent } from './ps-landing.component';

describe('PsLandingComponent', () => {
  let component: PsLandingComponent;
  let fixture: ComponentFixture<PsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
