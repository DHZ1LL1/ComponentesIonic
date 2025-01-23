import { Component, OnInit } from '@angular/core';
import { defaultEquals } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  email:String="";
  password:String="";

  constructor() {
   }

  ngOnInit() {
  }

  login(){
    if (this.email === "admin") {
      console.log("Login exitoso");
    } else {
      console.log("Login fallido");
    }

    if(this.password === "admin"){
      console.log("Login exitoso");
    } else {
      console.log("Login fallido");
    }  
  }
}
