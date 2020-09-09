import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
logout():void{
  localStorage.setItem("isLoggedin","false")
  localStorage.removeItem("token")
}


autharray(user:any){
  let Userarray=[]
  if(localStorage.getItem('Users')){
    Userarray=JSON.parse(localStorage.getItem('Users'))
  }
  return Userarray.find(p=>p.email === user.email && p.password === user.password) 
}
  constructor() { }
}
