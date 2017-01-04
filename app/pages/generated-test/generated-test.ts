import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html'
})
export class GeneratedTestPage {
  constructor(private nav: NavController, private connectionSservice: ConnectionService) {}

  buscarCep() : void{
    this.connectionSservice.getCep("89116594").then((resp)=>{
      if(resp.status == 200){
        let json = resp.json();
        console.log(json);
        console.log(json.localidade);
      }else{
        console.log("Erro: " + resp);
      }
    }).catch((err)=>{
      console.log("Erro");
    });
  }
}
