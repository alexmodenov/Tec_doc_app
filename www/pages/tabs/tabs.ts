import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home'
import { CategoryPage } from '../category/category'
import { VendorListPage } from '../vendor-list/vendor-list'
import { CartTabPage } from '../cart-tab/cart-tab'
import { ProfilePage } from '../profile/profile'
import { TbarService } from '../../providers/tbar-service';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root: any = HomePage;
  tab2Root: any = CategoryPage;
  tab3Root: any = VendorListPage;
  tab4Root: any = CartTabPage;
  tab5Root: any = ProfilePage;
  cartTabBage: number = 0;
  mySelectedIndex: any;
  constructor(public navCtrl: NavController, navParams: NavParams, public tb: TbarService, public storage: Storage) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidEnter() {
    this.storage.get('oddwolves-cart').then((data) => {
      if (data) {
        this.cartTabBage = JSON.parse(data).length;
    }});
  }
}