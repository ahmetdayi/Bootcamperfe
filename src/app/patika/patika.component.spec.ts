import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatikaComponent } from './patika.component';

describe('PatikaComponent', () => {
  let component: PatikaComponent;
  let fixture: ComponentFixture<PatikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatikaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
