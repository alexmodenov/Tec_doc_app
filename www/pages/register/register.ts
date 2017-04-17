import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserService } from '../../providers/user-service';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  registInfo = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: ''
  };
  confirmPassword: '';
  errorModal: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public userService: UserService, public alertCtrl: AlertController,
    public wooService: WoocommerceService, public loadingCtrl: LoadingController, public translateService: TranslateService) {

  }


  login() {
    this.navCtrl.push(LoginPage);
  }

  btnRegisterUser() {
    this.translateService.get(['Notice', 'NetWork_Error', 'OK', 'Loading', 'Require_Email', 'Require_Name',
      'Require_Username', 'Require_Password', 'Password_Check', 'Sing_up_Successed', 'Sign_up_failed', 'Contact_Admin']).subscribe(value => {
        if (this.registInfo.email == null || this.registInfo.email.trim().length == 0) {
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Require_Email'],
            buttons: [value['OK']]
          }).present();
          return;
        }
        if (this.registInfo.first_name == null || this.registInfo.first_name.trim().length == 0 || this.registInfo.last_name == null || this.registInfo.last_name.trim().length == 0) {
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Require_Name'],
            buttons: [value['OK']]
          }).present();
          return;
        }
        if (this.registInfo.username == null || this.registInfo.email.trim().length == 0) {
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Require_Username'],
            buttons: [value['OK']]
          }).present();
          return;
        }
        if (this.registInfo.password == null || this.registInfo.password.trim().length < 6) {
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Require_Password'],
            buttons: [value['OK']]
          }).present();
          return;
        }
        if (this.registInfo.password != this.confirmPassword) {
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Password_Check'],
            buttons: [value['OK']]
          }).present();
          return;
        }
        var loadingModal = this.loadingCtrl.create({
          content: value['Loading']
        });
        loadingModal.present();
        this.wooService.createCustomer('',
          {
            customer:
            {
              first_name: this.registInfo.first_name,
              last_name: this.registInfo.last_name,
              username: this.registInfo.username,
              password: this.registInfo.password,
              email: this.registInfo.email
            }
          }
        ).then((data: any) => {
          loadingModal.dismiss();
          if (data && data.customer && data.customer.id > 0) {
            var successModal = this.loadingCtrl.create({
              spinner: 'hide',
              content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Sing_up_Successed'] + '</div>'
            });
            successModal.present();
            setTimeout(() => {
              successModal.dismiss();
              this.viewCtrl.dismiss();
            }, 2000);
          } else {
            this.alertCtrl.create({
              title: value['Notice'],
              message: value['Sign_up_failed'],
              buttons: [value['OK']]
            }).present();
          }
        }, (reson) => {
          loadingModal.dismiss();
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Contact_Admin'],
            buttons: [value['OK']]
          }).present();
        });
      });
  }
}
