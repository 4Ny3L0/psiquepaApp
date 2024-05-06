import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsWorkshopsComponent } from './ps-workshops.component';

describe('PsWorkshopsComponent', () => {
  let component: PsWorkshopsComponent;
  let fixture: ComponentFixture<PsWorkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsWorkshopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
