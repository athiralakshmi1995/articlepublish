import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthorhomeComponent } from './authorhome/authorhome.component'




@NgModule({
  declarations: [SignupComponent, NavComponent, FooterComponent, SigninComponent, MainhomeComponent, AuthorhomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SignupComponent,
    SigninComponent,
    NavComponent,
    FooterComponent
  ]
})
export class HomeModule { }
