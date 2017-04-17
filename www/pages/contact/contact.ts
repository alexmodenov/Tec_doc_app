import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AppConfig } from '../../app/app-config';
/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public appConfig: AppConfig) { }

  close() {
    this.viewCtrl.dismiss();
  }

}
