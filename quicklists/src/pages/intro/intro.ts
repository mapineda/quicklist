import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slideOptions: any;

  constructor(public nav: NavController) {
    this.slideOptions = {
      pager: true
    };
  }

  goToHome(): void {
    this.nav.setRoot(HomePage);
  }

  // ionViewDidLoad() {
  //   console.log('Hello IntroPage Page');
  // }

}
