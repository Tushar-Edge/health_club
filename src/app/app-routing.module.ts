import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [

  {component:LandingPageComponent,path:'/landing-page'},
  {component:PlaceFitnessTrainerAppointmentComponent,path:'/place-fitness-trainer-appointment'},
  {component:ViewAppointmentComponent,path:'/view-appointment'},
  {component:ContactUsComponent,path:'/contact-us'}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// landing-page
//place-fitness-trainer-appointment
//view-appointment
//contact-us