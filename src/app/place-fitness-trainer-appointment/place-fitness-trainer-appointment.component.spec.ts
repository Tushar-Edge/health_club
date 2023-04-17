import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment.component';

describe('PlaceFitnessTrainerAppointmentComponent', () => {
  let component: PlaceFitnessTrainerAppointmentComponent;
  let fixture: ComponentFixture<PlaceFitnessTrainerAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceFitnessTrainerAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceFitnessTrainerAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
