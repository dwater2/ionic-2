import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})
export class InputTestPage {

  login: string;
  senha: string;

  constructor(private nav: NavController) {}

  entrar(){
    let alert = Alert.create({
      title: 'Login',
      message: 'User: ' + this.login + ', Pass: ' + this.senha
    });
    this.nav.present(alert);
  }
}
