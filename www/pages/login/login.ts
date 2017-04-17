import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UserService } from '../../providers/user-service';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { SowService } from '../../providers/sow-service';
import { AppConfig } from '../../app/app-config';
import { Storage } from '@ionic/storage';
import CryptoJS from 'crypto-js';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userName: string;
  password: string;
  email: string;
  errorModal: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public userService: UserService, public wooService: WoocommerceService,
    public appConfig: AppConfig, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public sowService: SowService, public storage: Storage
    , public translateService: TranslateService) {

  }

  doRegister() {
    this.navCtrl.push(RegisterPage);
  }

  doLogin() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK', 'Sign_In_Failed', 'Sign_In_No_Email', 'Sign_In_Email_Error','No_Email_Or_Password']).subscribe(value => {
      var loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      if (this.appConfig.Eanble_Login_With_Password) {
        if (this.email == null || this.password == null || this.email.trim().length == 0 || this.password.trim().length < 6) {
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['No_Email_Or_Password'],
            buttons: [value['OK']]
          }).present();
          return;
        }

        loadingModal.present();

        var password = this.password;
        if (this.appConfig.App_Secret != '') {
          var key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(this.appConfig.App_Secret).toString());
          var iv = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(this.appConfig.App_Secret).toString().substr(0, 16));
          password = CryptoJS.AES.encrypt(password, key, { iv: iv }).toString();
        }

        this.sowService.login({ email: this.email, password: encodeURIComponent(password) }).then((data: any) => {
          if (data && data != 'error') {
            this.userService.id = data.id;
            this.userService.email = data.email;
            this.userService.first_name = data.first_name;
            this.userService.last_name = data.last_name;
            this.userService.name = data.first_name + data.last_name;
            this.userService.username = data.username;
            this.userService.isAuthenticated = true;

            this.storage.set('oddwolves-user-info', JSON.stringify(data));
            loadingModal.dismiss();
            this.viewCtrl.dismiss();
          } else {
            loadingModal.dismiss();
            this.alertCtrl.create({
              title: value['Notice'],
              message: value['Sign_In_Failed'],
              buttons: [value['OK']]
            }).present();
          }
        }, (reson) => {

          loadingModal.dismiss();
          this.errorModal.present();
        });
      }
      else {
        if (this.email == null || this.email.trim().length == 0) {
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Sign_In_No_Email'],
            buttons: [value['OK']]
          }).present();
          return;
        }
        loadingModal.present();
        this.wooService.getCustomerByEmail({ email: this.email }).then((data: Array<any>) => {
          if (data.length > 0 && data[0] && data[0].id > 0) {
            this.userService.id = data[0].id;
            this.userService.email = data[0].email;
            this.userService.first_name = data[0].first_name;
            this.userService.last_name = data[0].last_name;
            this.userService.name = data[0].first_name + data[0].last_name;
            this.userService.username = data[0].username;
            this.userService.isAuthenticated = true;
            loadingModal.dismiss();
            this.viewCtrl.dismiss();
          } else {
            loadingModal.dismiss();
            this.alertCtrl.create({
              title: value['Notice'],
              message: value['Sign_In_Email_Error'],
              buttons: [value['OK']]
            }).present();
          }
        }, (reson) => {
          loadingModal.dismiss();
          this.errorModal.present();
        });
      }
    });

  }

  doClose() {
    this.viewCtrl.dismiss();
  }
}
