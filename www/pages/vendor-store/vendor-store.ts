import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SowService } from '../../providers/sow-service';
import { ProductDetailsPage } from '../product-details/product-details';
import { AppConfig } from '../../app/app-config';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the VendorStore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vendor-store',
  templateUrl: 'vendor-store.html'
})
export class VendorStorePage {
  loadingModal: any;
  page: number;
  per_page: number;
  has_more: boolean;
  showType = 'grid';
  vendor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sowService: SowService, public appconfig: AppConfig, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, public translateService: TranslateService) {
    this.page = 1;
    this.per_page = 10;
    this.has_more = true;
  }


  changeShwoType() {
    if (this.showType == 'grid') {
      this.showType = 'list';
    } else {
      this.showType = 'grid';
    }
  }

  ionViewDidEnter() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      var loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      loadingModal.present();
      this.sowService.getVendorDetails(this.navParams.get('vendor_id'), {
        page: 1, per_page: 10, is_vendor: true,
        'filter[author]': this.navParams.get('vendor_id')
      }).then((data) => {
        this.vendor = data;
        if (this.vendor.products.length < this.per_page) {
          this.has_more = false;
        }
        else {
          this.page++;
        }
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

  viewProduct(id) {
    this.navCtrl.push(ProductDetailsPage, { id: id });
  }

  doRefresh(refresher) {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.page = 1;
      this.sowService.getVendorDetails(this.navParams.get('vendor_id'), {
        page: 1, per_page: 10, is_vendor: true,
        'filter[author]': this.navParams.get('vendor_id')
      }).then((data) => {
        this.vendor = data;
        if (this.vendor.products.length < this.per_page) {
          this.has_more = false;
        }
        else {
          this.page++;
        }
        refresher.complete();
      }, (reson) => {
        refresher.complete();
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['NetWork_Error'],
          buttons: [value['OK']]
        });

      });
    });

  }

  doInfinite(infiniteScroll) {
    if (this.has_more) {
      this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
        this.sowService.getVendorDetails(this.navParams.get('vendor_id'), {
          page: this.page, per_page: this.per_page, is_vendor: true,
          'filter[author]': this.navParams.get('vendor_id')
        }).then((data: any) => {
          if (data && data.products) {
            data.products.forEach(p => {
              this.vendor.products.push(p);
            });

            if (data.products.length < this.per_page) {
              this.has_more = false;
            }
            else {
              this.page++;
            }
          }
          infiniteScroll.complete();
        }, (reson) => {
          infiniteScroll.complete();
          this.alertCtrl.create({
            title: 'Notice',
            subTitle: 'Error!Please check your network',
            buttons: ['OK']
          }).present();
        });
      });

    }
    else {
      infiniteScroll.enable(false);
    }
  }

}
