import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CountryPage } from '../country/country';
import { UserService } from '../../providers/user-service';
import { TranslateService } from 'ng2-translate';

/*
  Generated class for the Address page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
  shippingAddress = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip: ''
  };
  billingAddress = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip: ''
  };
  sameAddress = true;
  loadingModal: any;
  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    public userService: UserService, public translateService: TranslateService) {

  }

  selectCountry(type) {
    let countryModal = this.modalCtrl.create(CountryPage, {
      'country': type == 'shipping' ? this.shippingAddress.country : this.billingAddress.country,
      'forwhich': type
    });
    countryModal.onDidDismiss(data => {
      if (data.forwhich == 'shipping') {
        this.shippingAddress.country = data.country;
      }

    });
    countryModal.present();
  }

  ionViewDidEnter() {
    this.translateService.get(['Loading']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();

      this.storage.get('oddwolves-user-shipping-address').then((data) => {
        if (data) {
          this.shippingAddress = JSON.parse(data);
        } else {
          this.shippingAddress.email = this.userService.email;
        }
      }).then(() => {
        this.storage.get('oddwolves-user-billing-address').then((data) => {
          if (data) {
            this.billingAddress = JSON.parse(data);
          }
          else {
            this.billingAddress.email = this.userService.email;
          }
          this.loadingModal.dismiss();
        });
      });
    });


  }

  saveAddress() {
    this.translateService.get(['Loading']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        spinner: 'hide',
        content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Address_Saved'] + '</div>'
      });
      this.loadingModal.present();
      this.storage.set('oddwolves-user-shipping-address', JSON.stringify(this.shippingAddress));
      if (this.sameAddress) {
        this.storage.set('oddwolves-user-billing-address', JSON.stringify(this.shippingAddress));
      } else {
        this.storage.set('oddwolves-user-billing-address', JSON.stringify(this.billingAddress));
      }

      setTimeout(() => {
        this.loadingModal.dismiss();
        this.navCtrl.pop();
      }, 2000);
    });
  }


}
