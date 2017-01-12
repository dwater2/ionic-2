import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network, Connection } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/network-test/network-test.html',
})
export class NetworkTestPage {

  connectioType: any;

  constructor(private nav: NavController) {}

  check(){
    
    this.connectioType = Network.connection;

    if(Network.connection == Connection.WIFI){

    }else if(Network.connection == Connection.CELL_3G){

    }
  }
}
