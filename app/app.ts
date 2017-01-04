import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {ConnectionService} from './providers/connection-service/connection-service';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Home-Test', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated-Test', icon: 'home'},
      {component: AlertPage, title: 'Alerta', icon: 'home'},
      {component: ButtonTestPage, title: 'Button', icon: 'home'}

    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any) : void {
    this.rootPage = page.component;
  }

  clicou() : void{
    console.log("Clicou");
  }
}

ionicBootstrap(MyApp,[ConnectionService]);
