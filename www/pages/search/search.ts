import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { ProductDetailsPage } from '../product-details/product-details';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  myInput: string = '';
  products: any;
  loadingModal: any;
  noResult: boolean;
  errorModal: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public wooService: WoocommerceService,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public translateService: TranslateService) {
    this.noResult = false;
  }

  onSearch() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
      this.wooService.getProducts({ search: this.myInput }).then((products: Array<any>) => {
        if (products.length == 0) {
          this.noResult = true;
        } else {
          this.products = products;
        }
        this.loadingModal.dismiss();
      }, (reson) => {
        this.loadingModal.dismiss();
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['NetWork_Error'],
          buttons: [value['OK']]
        }).present();
      });
    });

  }
  onClose() {
    this.viewCtrl.dismiss();
  }

  viewProduct(id) {
    this.navCtrl.push(ProductDetailsPage, { id: id });
  }
}
