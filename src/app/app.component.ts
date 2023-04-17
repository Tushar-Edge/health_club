

import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='health';
  @ViewChild('article', { read: ViewContainerRef }) articleRef!: ViewContainerRef;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(componentName: string) {
  // Clear any existing content in the article tag
  this.articleRef.clear();

  // Load the corresponding component into the article tag
  let component;
  switch (componentName) {
    case 'landing-page':
      component = LandingPageComponent;
      break;
    case 'place-fitness-trainer-appointment':
      component = PlaceFitnessTrainerAppointmentComponent;
      break;
    case 'view-appointment':
      component = ViewAppointmentComponent;
      break;
    case 'contact-us':
      component = ContactUsComponent;
      break;
    default:
      component=LandingPageComponent;
      break;
  }
  const factory = this.componentFactoryResolver.resolveComponentFactory(component);
  this.articleRef.createComponent(factory);
}

}
