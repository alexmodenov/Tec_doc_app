import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Attribute page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attribute',
  templateUrl: 'attribute.html'
})
export class AttributePage {
  options: Array<string>;
  selectedItem: string;
  attr_name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

  ionViewDidEnter() {
    this.options = this.navParams.get('options');
    this.attr_name = this.navParams.get('attr');
    this.selectedItem = this.navParams.get('option');
  }

  chooseOption(option) {
    this.viewCtrl.dismiss({
      'attr': this.attr_name,
      'option': option
    });
  }

}
