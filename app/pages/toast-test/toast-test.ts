import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/toast-test/toast-test.html',
})
export class ToastTestPage {
  constructor(private nav: NavController) {}

  showToast(){
    let toast = Toast.create({
      message: "Olá munndo",
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "Ok",
      position: 'bottom'
    });

    toast.onDismiss(() =>{
      console.log("Finalizado");
    });
    this.nav.present(toast);
  }
}
