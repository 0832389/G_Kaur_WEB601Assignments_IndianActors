import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianActorsComponent } from './indian-actors.component';

describe('IndianActorsComponent', () => {
  let component: IndianActorsComponent;
  let fixture: ComponentFixture<IndianActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianActorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndianActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
