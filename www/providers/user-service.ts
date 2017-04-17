import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AppConfig } from '../app/app-config';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  LOCAL_TOKEN_KEY = 'IonWooMultiVendorStore';
  id = '';
  username = '';
  email = '';
  name = '';
  first_name = '';
  last_name = '';
  isAuthenticated = false;
  authToken = '';
  cachedData: any;
  constructor(public storage: Storage, public appConfig: AppConfig) {
    this.LOCAL_TOKEN_KEY = appConfig.Shop_Name;
  }

  loadUserCredentials() {
    this.storage.get(this.LOCAL_TOKEN_KEY).then(user => {
      if (user) {
        this.useCredentials(JSON.parse(user));
      }
    });
  }

  useCredentials(user) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.name = user.firstname + ' ' + user.lastname;
    this.first_name = user.firstname ;
    this.last_name = user.lastname;
    this.isAuthenticated = true;
    this.authToken = JSON.stringify(user);
  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.id = '';
    this.username = '';
    this.email = '';
    this.name = '';
    this.first_name = '';
    this.last_name = '';
    this.isAuthenticated = false;
    this.storage.remove(this.LOCAL_TOKEN_KEY);
  }
}
