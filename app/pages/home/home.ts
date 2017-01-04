import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {Lowercase} from '../../pipes/lowercase';

@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [Lowercase]
})
export class HomePage {
  constructor(private navController: NavController) {

  }
}
