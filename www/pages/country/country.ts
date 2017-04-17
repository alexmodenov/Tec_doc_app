import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { CountryService } from '../../providers/country-service';
/*
  Generated class for the Country page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-country',
  templateUrl: 'country.html'
})
export class CountryPage {
  selectedCountry: string = '';
  countries: any;
  constructor(public navCtrl: NavController, public navparams: NavParams, public countryService: CountryService,public viewCtrl: ViewController) {  
    this.countries=this.countryService.getAll();
  }

  selCountry(fn)
  {
    this.selectedCountry=fn;
    this.viewCtrl.dismiss({'country':this.selectedCountry,'forwhich':this.navparams.get('forwhich')});
  }

  ionViewDidEnter() {
    this.selectedCountry = this.navparams.get('country');
  }

}
