import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsServicesComponent } from './ps-services.component';

describe('PsServicesComponent', () => {
  let component: PsServicesComponent;
  let fixture: ComponentFixture<PsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
