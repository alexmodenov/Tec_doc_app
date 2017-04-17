import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { VendorStorePage } from '../vendor-store/vendor-store'
import { SowService } from '../../providers/sow-service';
import { TbarService } from '../../providers/tbar-service';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the VendorList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vendor-list',
  templateUrl: 'vendor-list.html'
})
export class VendorListPage {
  vendors: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public sowService: SowService, public tb: TbarService, public loadingCtrl: LoadingController, public alertCtrl: AlertController
    , public translateService: TranslateService) { }


  ionViewDidEnter() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      var loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      loadingModal.present();
      this.sowService.getVendorList().then((data) => {
        this.vendors = data;
        loadingModal.dismiss();
      }, (reson) => {
        loadingModal.dismiss();
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['NetWork_Error'],
          buttons: [value['OK']]
        });
      });
    });

  }

  ionViewWillEnter() {
    this.tb.hideBar = false;
  }

  vendorSelected(vendor) {
    this.navCtrl.push(VendorStorePage, { vendor_id: vendor.id });
  }
}
