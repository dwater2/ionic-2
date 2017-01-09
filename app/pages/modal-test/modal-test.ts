import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { ModalLoginPage} from './../modal-login/modal-login';


@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {
  constructor(private nav: NavController) {}

  abrirModal(){
    let modal = Modal.create(ModalLoginPage, {
      action: {
        test: "Olá",
        value: true
      }
    });

    modal.onDismiss((param)=>{
      console.log(param);
    });
    this.nav.present(modal);
  }
}
