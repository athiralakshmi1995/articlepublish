import { Component, OnInit } from '@angular/core';
// import {Iregister} from '../iregister'
import {FormBuilder,FormGroup,Validators}  from '@angular/forms';
import {RegisterService} from '../../register.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

value:string

user:any={};
  constructor(private fb:FormBuilder ,private regi:RegisterService) { 

  }
  profileForm=this.fb.group({
    username:["",[Validators.minLength(4),Validators.required]],
    email:["",[Validators.required,Validators.pattern(/[a-zA-Z_@#$%]+@(gmail.com)|(yahoo.com)|(.in)/i)]],
    password:["",[Validators.required]]

  })
  register(){
console.log(this.profileForm.value)
    this.user=Object.assign(this.user,this.profileForm.value)
   this.regi.addUser(this.user)

  }
  
    // console.log(this.profileForm.value)
    // var s=JSON.stringify(this.profileForm.value)
    // if(localStorage.length==0)
    //    {
    //  localStorage.setItem("1",s)
    //      }
    //         else
            // {
            //      var i=localStorage.length
            // //     i+=1
            //     localStorage.setItem(i.toString(),s)
            // }
          
          
    

  

  ngOnInit(): void {
    
  }

}
