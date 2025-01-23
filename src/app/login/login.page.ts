import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { defaultEquals } from '@angular/core/primitives/signals';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  email:String="";
  password:String="";

  constructor(private navController: NavController) {
   }

  ngOnInit() {
  }

  login(form:NgForm){

    //Obtener valores del formulario
    console.log('Email: ', this.email);
    console.log('Password: ', this.password);
    console.log(form.value);

    //Validar datos del formulario
    console.log('Formulario valido: ', form.valid);

    //Si form es invalido
    //Console.log ('Todos los campos son requeridos');
    //return

    if (form.invalid) {
      console.log('Todos los campos son requeridos');
      return;
    }

    if (this.email === "admin" && this.password === "admin") {
      this.navController.navigateForward('/home');
    }
  }
}
