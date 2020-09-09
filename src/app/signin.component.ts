import { Component, OnInit } from '@angular/core';
import {Ilogin} from '../ilogin'
import {FormBuilder,FormGroup,Validators,FormsModule} from '@angular/forms'
import {Router} from '@angular/router'
import{AuthService} from '../auth.service'



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
model:Ilogin
// ={email:"admin123@gmail.com",password:"12345"}
value:string

loginForm:FormGroup
message:string
returnurl:string
errormessage:string
  constructor(private router:Router,private auth:AuthService,private builder:FormBuilder) { }

  ngOnInit(): void {
  
  this.loginForm=this.builder.group({
    email:['',[Validators.required,Validators.pattern(/[a-zA-Z_@#$%]+@(gmail.com)|(yahoo.com)|(.in)/i)]],
    password:['',[Validators.required]]
  })
  this.returnurl="/authorhome"
  this.auth.logout()
  }
get f(){
  return this.loginForm.controls;
}
login(){
console.log(this.loginForm.value)
 const user=this.auth.autharray(this.loginForm.value)
 if (user){
   console.log("login succesful")
   this.router.navigate([this.returnurl])
   localStorage.setItem('token',this.f.email.value)
 }else{
   console.log("login unsuccesful")
   this.message="invalid Datas"
 }


  // if(this.loginForm.invalid){
  //   return
  // }
  // else{
  //   if(this.f.email.value==this.model.email && this.f.password.value==this.model.password){
  //     console.log("login success")
  //     localStorage.setItem('isLoggedIn',"true")
  //     localStorage.setItem('token',this.f.email.value)
  //     this.router.navigate([this.returnurl])
  //   }
  //   else{
  //     this.message="Invalid credantials"
  //   }
  // }

}

}
