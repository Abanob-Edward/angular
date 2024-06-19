import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHearingComponent } from './add-hearing.component';

describe('AddHearingComponent', () => {
  let component: AddHearingComponent;
  let fixture: ComponentFixture<AddHearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHearingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
