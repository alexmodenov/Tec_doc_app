import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { ProductDetailsPage } from '../product-details/product-details';
import { CheckoutPage } from '../checkout/checkout';
import { Storage } from '@ionic/storage';
import { WoocommerceService, CartProduct } from '../../providers/woocommerce-service';
import { UserService } from '../../providers/user-service';
import { LoginPage } from '../login/login';
import { AppConfig } from '../../app/app-config';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',

})
export class CartPage {
    cart: Array<CartProduct>;
    total: number;
    subTotal: number;
    shipTotal: number;
    loadingModal: any;
    isEmpty: boolean;
    errorModal: any;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage,
        public wooService: WoocommerceService, public loadingCtrl: LoadingController, public userService: UserService, public appConfig: AppConfig, public alertCtrl: AlertController,
        public translateService: TranslateService) {
        this.subTotal = 0;
        this.total = 0;
        this.shipTotal = 0;
        this.isEmpty = false;
    }

    ionViewDidEnter() {
        this.subTotal = 0;
        this.total = 0;
        this.shipTotal = 0;
        this.translateService.get(['Loading']).subscribe(value => {
            this.storage.get('oddwolves-cart').then((data) => {
                if (data) {
                    this.cart = JSON.parse(data);
                    if (this.cart.length > 0) {
                        var includeID = '';
                        this.cart.forEach(element => {
                            includeID += element.product_id + ',';
                        });
                        if (includeID.length > 0) {
                            includeID = includeID.substr(0, includeID.length - 1);
                        }
                        this.loadingModal = this.loadingCtrl.create({
                            content: value['Loading']
                        });
                        this.loadingModal.present();
                        this.wooService.getProducts({ include: includeID }).then((products: Array<any>) => {

                            this.cart.forEach(element => {
                                var findProduct = products.find((product) => {
                                    return product.id == element.product_id;
                                });

                                element.name = findProduct.name;
                                if (findProduct.variations.length > 0) {

                                    var findVariation = findProduct.variations.find(variation => {
                                        return variation.id == element.variation_id;
                                    });
                                    element.thumb = findVariation.image[0].src;
                                    element.price = findVariation.price;
                                } else {
                                    element.thumb = findProduct.images[0].src;
                                    element.price = findProduct.price;
                                }
                            });
                            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
                            this.isEmpty = false;
                            this.loadingModal.dismiss();
                        }, (reson) => {
                            this.loadingModal.dismiss();
                            this.errorModal.present();
                        });
                        this.cart.forEach(product => {
                            this.subTotal += product.price * product.quantity;
                        });
                        this.total = this.subTotal;
                    } else {
                        this.isEmpty = true;
                    }

                }
                else {
                    this.isEmpty = true;
                }
            });
        });

    }

    order() {
        this.navCtrl.push(AddressPage);
    }

    openDetails() {
        var detailsModal = this.modalCtrl.create(ProductDetailsPage);
        detailsModal.present();
    }

    goHome() {
        this.navCtrl.parent.select(0);
    }

    remove(pid) {
        event.stopPropagation();
        var findIndex = this.cart.findIndex((element) => {
            return element.product_id == pid;
        });
        if (findIndex != -1) {
            this.cart.splice(findIndex, 1);
            if (this.cart.length == 0) {
                this.isEmpty = true;
            }
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += product.price * product.quantity;
        });
        this.total = this.subTotal;
    }

    subQuantity(item) {
        event.stopPropagation();
        if (item.quantity == 1) {
            item.quantity = 1;
        }
        else {
            item.quantity--;
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += product.price * product.quantity;
        });
        this.total = this.subTotal;
    }

    addQuantity(item) {
        event.stopPropagation();
        item.quantity++;
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += product.price * product.quantity;
        });
        this.total = this.subTotal;
    }

    ionViewWillLeave() {
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
    }

    ionViewWillEnter() {
        this.isEmpty = false;
    }

    inputNum() {
        event.stopPropagation();
    }

    inputChanged(item) {
        event.stopPropagation();

        if (isNaN(item.quantity) == true || item.quantity <= 1) {
            item.quantity = 1;
        }
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += product.price * product.quantity;
        });
        this.total = this.subTotal;
    }

    checkout() {
        var desc = '';
        this.cart.forEach(element => {
            desc += element.name + ',';
        });
        if (desc.length > 0) {
            desc = desc.substr(0, desc.length - 1);
        }
        if (this.userService.isAuthenticated == true) {
            desc = desc.substr(0, desc.length - 1);
            this.navCtrl.push(CheckoutPage, { "total": this.total, "description": desc });
        } else {
            let modal = this.modalCtrl.create(LoginPage, {}, { showBackdrop: true, enableBackdropDismiss: true });
            modal.present();
            modal.onDidDismiss(() => {
                if (this.userService.isAuthenticated) {
                    this.navCtrl.push(CheckoutPage, { "total": this.total, "description": desc });
                }

            });
        }
    }

    viewProduct(id) {
        this.navCtrl.push(ProductDetailsPage, { id: id, org: 'cart' });
    }
}
