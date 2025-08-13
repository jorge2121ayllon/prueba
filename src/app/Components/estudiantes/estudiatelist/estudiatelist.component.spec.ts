import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiatelistComponent } from './estudiatelist.component';

describe('EstudiatelistComponent', () => {
  let component: EstudiatelistComponent;
  let fixture: ComponentFixture<EstudiatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiatelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudiatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
