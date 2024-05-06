import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsBlogComponent } from './ps-blog.component';

describe('PsBlogComponent', () => {
  let component: PsBlogComponent;
  let fixture: ComponentFixture<PsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
