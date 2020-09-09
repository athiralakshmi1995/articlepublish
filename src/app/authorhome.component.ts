import { Component, OnInit } from '@angular/core'
import{AuthService} from '../auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-authorhome',
  templateUrl: './authorhome.component.html',
  styleUrls: ['./authorhome.component.css']
})
export class AuthorhomeComponent implements OnInit {
id:string;
  constructor( private route:Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("token")
  }
logout(){
  console.log("inside function...")
  this.auth.logout()
  this.route.navigate(["/Signin"])
}
}
