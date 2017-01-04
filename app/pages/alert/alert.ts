import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  user: string = "";

  constructor(private nav: NavController) {}

  alert(){
    let alert = Alert.create({
      title: "Alert test",
      message: "Este é um exemplo de alert",
      buttons : ['Ok']
    });
    this.nav.present(alert);
  }

  alertInputs(){
    let alertInputs = Alert.create({
      title: 'Prompt',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Seu nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
      },
      {
        text: 'Ok',
        handler: (data) => {
          this.user = data.nome;
        }
      }
    ]
    });
    this.nav.present(alertInputs);
  }

}
