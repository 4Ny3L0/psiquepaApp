import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsLoginComponent } from './ps-login.component';

describe('PsLoginComponent', () => {
  let component: PsLoginComponent;
  let fixture: ComponentFixture<PsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
