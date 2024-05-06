import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsFooterComponent } from './ps-footer.component';

describe('PsFooterComponent', () => {
  let component: PsFooterComponent;
  let fixture: ComponentFixture<PsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
