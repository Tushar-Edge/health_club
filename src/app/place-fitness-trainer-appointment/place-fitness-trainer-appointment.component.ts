

import { Component,ElementRef, HostListener  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';


@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html',
  styleUrls: ['./place-fitness-trainer-appointment.component.css']
})
export class PlaceFitnessTrainerAppointmentComponent {

  title="health";
  constructor(private elementRef: ElementRef,/*private http: HttpClient*/) {}
  

  appointmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    addressLine1: new FormControl('', Validators.required),
    addressLine2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pinCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
    trainerPreference: new FormControl('', Validators.required),
    physiotherapistRequired: new FormControl(false),
    package: new FormGroup({
        id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        price: new FormControl(0, Validators.required)
    }),
    weeks: new FormControl({value: 0, disabled: true}),
    amount: new FormControl({value: 0, disabled: true}),
});



@HostListener('keydown.tab', ['$event'])
  onTab(event: KeyboardEvent) {
    const inputs = this.elementRef.nativeElement.querySelectorAll('input');
    const activeElement = document.activeElement as HTMLElement;
    const activeIndex = Array.from(inputs).indexOf(activeElement);

    if (event.shiftKey) {
      // Shift+Tab pressed
      if (activeIndex === 0) {
        // Move focus to the last input field
        inputs[inputs.length - 1].focus();
        event.preventDefault();
      }
    } else {
      // Tab pressed
      if (activeIndex === inputs.length - 1) {
        // Move focus to the first input field
        inputs[0].focus();
        event.preventDefault();
      }
    }
  }


  obj = { appointmentForm: this.appointmentForm };

  packages = [
    {id: 1, name: 'Basic', price: 1000},
    {id: 2, name: 'Standard', price: 2000},
    {id: 3, name: 'Premium', price: 3000},
  ];
//   this.appointmentForm.get('package').setValue({
//     id: '123',
//     name: 'Package 1',
//     price: 50
// });


successMessage: string='';
errorMessage: string='';
 
  onPackageChange() {
    const selectedPackage = this.appointmentForm.get('package')?.value;
    if (selectedPackage?.id === '2' || selectedPackage?.id === '3') {
      this.appointmentForm.get('weeks')?.enable();
    } else {
      this.appointmentForm.get('weeks')?.disable();
      this.appointmentForm.get('weeks')?.setValue(0);
    }
    this.calculateAmount();
  }

  // saveAppointment(appointment: any) {
  //   const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // replace with your API endpoint
  //   return this.http.post(apiUrl, appointment);
  // }
  
  
  onSubmit() {
    if (this.appointmentForm.valid) {
      const formData = this.appointmentForm.getRawValue();
      const selectedPackage = formData.package;
      if (selectedPackage && selectedPackage.price && formData.weeks) {
        const finalAmount: number = selectedPackage.price * formData.weeks;
        if (formData.physiotherapistRequired) {
          formData.amount = finalAmount + 200;
        } else {
          formData.amount = finalAmount;
        }
        this.successMessage="you sucessfully book the appointment";
      
        alert('Success! Form Data: ' + JSON.stringify(formData));
        this.appointmentForm.reset();
      } else {
        alert('Please select a package and enter the number of weeks.');
      }
    } else {
      alert('Please fill in all required fields.');
      this.appointmentForm.markAllAsTouched();
    }

    // const appointment = {
    //  name:this.appointmentForm.value.name,
    //  phone:this.appointmentForm.value.mobile,

    //  email:this.appointmentForm.value.email,

    //  age:this.appointmentForm.value.age,

    //  complete_Address:this.appointmentForm.value.addressLine1,

    //  trainerPreference:this.appointmentForm.value.trainerPreference,

    //  physiotherapist_Required:this.appointmentForm.value.physiotherapistRequired,

    //  package:this.appointmentForm.value.package,

    //  totalamount:this.appointmentForm.value.amount


    // };
    


    // this.saveAppointment(appointment).subscribe(
    //   res => {
    //     console.log('Appointment saved successfully:', res);
    //   },
    //   err => {
    //     console.error('Error saving appointment:', err);
    //   }
    // );

  }
  
  
  

 

  onPhysiotherapistChange() {
    this.calculateAmount();
  }

  onWeeksChange() {
    this.calculateAmount();
  }


  get name() {
    return this.appointmentForm.get('name');
  }

  get age() {
    return this.appointmentForm.get('age');
  }

  get email() {
    return this.appointmentForm.get('email');
  }

  get mobile() {
    return this.appointmentForm.get('mobile');
  }

  get addressLine1() {
    return this.appointmentForm.get('addressLine1');
  }

  get addressLine2() {
    return this.appointmentForm.get('addressLine2');
  }

  get city() {
    return this.appointmentForm.get('city');
  }

  get state() {
    return this.appointmentForm.get('state');
  }

  get country() {
    return this.appointmentForm.get('country');
  }

  get pinCode() {
    return this.appointmentForm.get('pinCode');
  }

  get trainerPreference() {
    return this.appointmentForm.get('trainerPreference');
  }

  get physiotherapistRequired() {
    return this.appointmentForm.get('physiotherapistRequired');
  }

  get selectedPackage() {
    return this.appointmentForm.get('selectedPackage');
  }

  get weeks() {
    return this.appointmentForm.get('weeks');
  }

 // const finalAmount: number = selectedPackage.price * weeks;

 calculateAmount() {
  const selectedPackage = this.appointmentForm.get('package')?.value;
  const weeks = this.appointmentForm.get('weeks')?.value;

  if (selectedPackage && selectedPackage.price && weeks) {
    const finalAmount: number = selectedPackage.price * weeks;

    if (this.appointmentForm.get('physiotherapistRequired')?.value) {
      this.appointmentForm.get('amount')?.setValue(finalAmount + 200);
    } else {
      this.appointmentForm.get('amount')?.setValue(finalAmount);
    }
  } else {
    this.appointmentForm.get('amount')?.setValue(0);
  }
}



  
}
