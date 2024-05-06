import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsAboutmeComponent } from './ps-aboutme.component';

describe('PsAboutmeComponent', () => {
  let component: PsAboutmeComponent;
  let fixture: ComponentFixture<PsAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsAboutmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
