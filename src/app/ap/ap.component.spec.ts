import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApComponent } from './ap.component';

describe('ApComponent', () => {
  let component: ApComponent;
  let fixture: ComponentFixture<ApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
