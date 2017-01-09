import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {ConnectionService} from './providers/connection-service/connection-service';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import {CardTestPage} from './pages/card-test/card-test';
import {IconTestPage} from './pages/icon-test/icon-test';
import {InputTestPage} from './pages/input-test/input-test';
import {ListTestPage} from './pages/list-test/list-test';
import {ModalTestPage} from './pages/modal-test/modal-test';
import {NavigationTestPage} from './pages/navigation-test/navigation-test';
import {TabTestPage} from './pages/tab-test/tab-test';
import {ToastTestPage} from './pages/toast-test/toast-test';

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
      {component: GeneratedTestPage, title: 'Generated-Test', icon: 'cafe'},
      {component: AlertPage, title: 'Alerta', icon: 'alert'},
      {component: ButtonTestPage, title: 'Button', icon: 'arrow-down'},
      {component: CardTestPage, title: 'Card', icon: 'card'},
      {component: IconTestPage, title: 'Icon', icon: 'bulb'},
      {component: InputTestPage, title: 'Input', icon: 'create'},
      {component: ListTestPage, title: 'List', icon: 'list'},
      {component: ModalTestPage, title: 'Modal', icon: 'albums'},
      {component: NavigationTestPage, title: 'Navigation', icon: 'arrow-forward'},
      {component: TabTestPage, title: 'Tab', icon: 'home'},
      {component: ToastTestPage, title: 'Toast', icon: 'bookmark'}

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
