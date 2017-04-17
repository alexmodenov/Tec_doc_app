import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController } from 'ionic-angular';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the OrderDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html'
})
export class OrderDetailsPage {
  loadingModal: any;
  order: any;
  errorModal: any;
  constructor(public navCtrl: NavController, public wooService: WoocommerceService,
    public loadingCtrl: LoadingController, public navParams: NavParams, public alertCtrl: AlertController, public translateService: TranslateService) {
  }

  ionViewDidEnter() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
      this.wooService.getOrder(this.navParams.get("oid")).then((order) => {
        this.order = order;
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
}
