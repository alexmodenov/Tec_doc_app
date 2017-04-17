import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { OrderDetailsPage } from '../order-details/order-details';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the OrderList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html'
})
export class OrderListPage {
  orderList: Array<any>;
  page: number;
  per_page: number;
  errorModal: any;
  has_more: boolean;
  loadingModal: any;
  constructor(public navCtrl: NavController, public userService: UserService, public wooService: WoocommerceService,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public translateService: TranslateService) {
    this.orderList = new Array<any>();
    this.page = 1;
    this.per_page = 10;
    this.has_more = true;
    this.errorModal = this.alertCtrl.create({
      title: 'Notice',
      subTitle: 'Error!Please check your network',
      buttons: ['OK']
    });
  }

  ionViewDidLoad() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
      this.wooService.getOrderList({
        page: this.page, per_page: this.per_page
        , customer: this.userService.id
      }).then((orderlist: Array<any>) => {
        this.orderList = orderlist;
        if (orderlist.length < this.per_page) {
          this.has_more = false;
        }
        else {
          this.page++;
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

  doRefresh(refresher) {
    this.translateService.get(['Notice',  'NetWork_Error', 'OK']).subscribe(value => {
      this.page = 1;
      this.wooService.getOrderList({
        page: this.page, per_page: this.per_page
        , customer: this.userService.id
      }).then((orderlist: Array<any>) => {
        this.orderList = orderlist;
        if (orderlist.length < this.per_page) {
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
        }).present();
      });
    });

  }

  doInfinite(infiniteScroll) {
    if (this.has_more) {
      this.wooService.getOrderList({ page: this.page, per_page: this.per_page, customer: this.userService.id }).then((orderlist: Array<any>) => {
        orderlist.forEach(p => {
          this.orderList.push(p);
        });

        if (orderlist.length < this.per_page) {
          this.has_more = false;
        }
        else {
          this.page++;
        }
        infiniteScroll.complete();
      }, (reson) => { infiniteScroll.complete(); this.errorModal.present(); });
    }
    else {
      infiniteScroll.enable(false);
    }
  }

  viewOrder(oid) {
    this.navCtrl.push(OrderDetailsPage, { oid: oid });
  }
}
