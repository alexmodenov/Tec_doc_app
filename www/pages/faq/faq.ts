import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AppConfig } from '../../app/app-config';
/*
  Generated class for the Faq page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {
  showGroup;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public appConfig: AppConfig) { }


  toggleGroup(num) {
    if (this.isGroupShown(num)) {
      this.showGroup = null;
    }
    else {
      this.showGroup = num;
    }
  }

  isGroupShown(num) {
    return this.showGroup == num;
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
