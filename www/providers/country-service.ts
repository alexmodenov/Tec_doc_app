import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CountryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CountryService {

  constructor(public http: Http) {
  }

  getAll() {
    return GroupCountries;
  }
}

export const GroupCountries: GourpCountry[] = [
  {
    group: 'A', Countries: [

      { sn: 'AF', fn: 'Afghanistan' },
      { sn: 'AX', fn: 'land Islands' },
      { sn: 'AL', fn: 'Albania' },
      { sn: 'DZ', fn: 'Algeria' },
      { sn: 'AS', fn: 'American Samoa' },
      { sn: 'AD', fn: 'Andorra' },
      { sn: 'AO', fn: 'Angola' },
      { sn: 'AI', fn: 'Anguilla' },
      { sn: 'AQ', fn: 'Antarctica' },
      { sn: 'AG', fn: 'Antigua and Barbuda' },
      { sn: 'AR', fn: 'Argentina' },
      { sn: 'AM', fn: 'Armenia' },
      { sn: 'AW', fn: 'Aruba' },
      { sn: 'AU', fn: 'Australia' },
      { sn: 'AT', fn: 'Austria' },
      { sn: 'AZ', fn: 'Azerbaijan' }
    ]
  },
  {
    group: 'B', Countries: [

      { sn: 'BS', fn: 'Bahamas' },
      { sn: 'BH', fn: 'Bahrain' },
      { sn: 'BD', fn: 'Bangladesh' },
      { sn: 'BB', fn: 'Barbados' },
      { sn: 'BY', fn: 'Belarus' },
      { sn: 'BE', fn: 'Belgium' },
      { sn: 'PW', fn: 'Belau' },
      { sn: 'BZ', fn: 'Belize' },
      { sn: 'BJ', fn: 'Benin' },
      { sn: 'BM', fn: 'Bermuda' },
      { sn: 'BT', fn: 'Bhutan' },
      { sn: 'BO', fn: 'Bolivia' },
      { sn: 'BQ', fn: 'Bonaire, Saint Eustatius and Saba' },
      { sn: 'BA', fn: 'Bosnia and Herzegovina' },
      { sn: 'BW', fn: 'Botswana' },
      { sn: 'BV', fn: 'Bouvet Island' },
      { sn: 'BR', fn: 'Brazil' },
      { sn: 'IO', fn: 'British Indian Ocean Territory' },
      { sn: 'VG', fn: 'British Virgin Islands' },
      { sn: 'BN', fn: 'Brunei' },
      { sn: 'BG', fn: 'Bulgaria' },
      { sn: 'BF', fn: 'Burkina Faso' },
      { sn: 'BI', fn: 'Burundi' }
    ]
  },
  {
    group: 'C', Countries: [
      { sn: 'KH', fn: 'Cambodia' },
      { sn: 'CM', fn: 'Cameroon' },
      { sn: 'CA', fn: 'Canada' },
      { sn: 'CV', fn: 'Cape Verde' },
      { sn: 'KY', fn: 'Cayman Islands' },
      { sn: 'CF', fn: 'Central African Republic' },
      { sn: 'TD', fn: 'Chad' },
      { sn: 'CL', fn: 'Chile' },
      { sn: 'CN', fn: 'China' },
      { sn: 'CX', fn: 'Christmas Island' },
      { sn: 'CC', fn: 'Cocos (Keeling) Islands' },
      { sn: 'CO', fn: 'Colombia' },
      { sn: 'KM', fn: 'Comoros' },
      { sn: 'CG', fn: 'Congo (Brazzaville)' },
      { sn: 'CD', fn: 'Congo (Kinshasa)' },
      { sn: 'CK', fn: 'Cook Islands' },
      { sn: 'CR', fn: 'Costa Rica' },
      { sn: 'HR', fn: 'Croatia' },
      { sn: 'CU', fn: 'Cuba' },
      { sn: 'CW', fn: 'Cura&ccedil;ao' },
      { sn: 'CY', fn: 'Cyprus' },
      { sn: 'CZ', fn: 'Czech Republic' }
    ]
  },
  {
    group: 'D', Countries: [

      { sn: 'DK', fn: 'Denmark' },
      { sn: 'DJ', fn: 'Djibouti' },
      { sn: 'DM', fn: 'Dominica' },
      { sn: 'DO', fn: 'Dominican Republic' }
    ]
  },
  {
    group: 'E', Countries: [

      { sn: 'EC', fn: 'Ecuador' },
      { sn: 'EG', fn: 'Egypt' },
      { sn: 'SV', fn: 'El Salvador' },
      { sn: 'GQ', fn: 'Equatorial Guinea' },
      { sn: 'ER', fn: 'Eritrea' },
      { sn: 'EE', fn: 'Estonia' },
      { sn: 'ET', fn: 'Ethiopia' }
    ]
  },
  {
    group: 'F', Countries: [

      { sn: 'FK', fn: 'Falkland Islands' },
      { sn: 'FO', fn: 'Faroe Islands' },
      { sn: 'FJ', fn: 'Fiji' },
      { sn: 'FI', fn: 'Finland' },
      { sn: 'FR', fn: 'France' },
      { sn: 'GF', fn: 'French Guiana' },
      { sn: 'PF', fn: 'French Polynesia' },
      { sn: 'TF', fn: 'French Southern Territories' }
    ]
  },
  {
    group: 'G', Countries: [

      { sn: 'GA', fn: 'Gabon' },
      { sn: 'GM', fn: 'Gambia' },
      { sn: 'GE', fn: 'Georgia' },
      { sn: 'DE', fn: 'Germany' },
      { sn: 'GH', fn: 'Ghana' },
      { sn: 'GI', fn: 'Gibraltar' },
      { sn: 'GR', fn: 'Greece' },
      { sn: 'GL', fn: 'Greenland' },
      { sn: 'GD', fn: 'Grenada' },
      { sn: 'GP', fn: 'Guadeloupe' },
      { sn: 'GU', fn: 'Guam' },
      { sn: 'GT', fn: 'Guatemala' },
      { sn: 'GG', fn: 'Guernsey' },
      { sn: 'GN', fn: 'Guinea' },
      { sn: 'GW', fn: 'Guinea-Bissau' },
      { sn: 'GY', fn: 'Guyana' }
    ]
  },
  {
    group: 'H', Countries: [

      { sn: 'HT', fn: 'Haiti' },
      { sn: 'HM', fn: 'Heard Island and McDonald Islands' },
      { sn: 'HN', fn: 'Honduras' },
      { sn: 'HK', fn: 'Hong Kong' },
      { sn: 'HU', fn: 'Hungary' }
    ]
  },
  {
    group: 'I', Countries: [

      { sn: 'IS', fn: 'Iceland' },
      { sn: 'IN', fn: 'India' },
      { sn: 'ID', fn: 'Indonesia' },
      { sn: 'IR', fn: 'Iran' },
      { sn: 'IQ', fn: 'Iraq' },
      { sn: 'IE', fn: 'Republic of Ireland' },
      { sn: 'IM', fn: 'Isle of Man' },
      { sn: 'IL', fn: 'Israel' },
      { sn: 'IT', fn: 'Italy' },
      { sn: 'CI', fn: 'Ivory Coast' }
    ]
  },
  {
    group: 'J', Countries: [

      { sn: 'JM', fn: 'Jamaica' },
      { sn: 'JP', fn: 'Japan' },
      { sn: 'JE', fn: 'Jersey' },
      { sn: 'JO', fn: 'Jordan' }
    ]
  },
  {
    group: 'K', Countries: [

      { sn: 'KZ', fn: 'Kazakhstan' },
      { sn: 'KE', fn: 'Kenya' },
      { sn: 'KI', fn: 'Kiribati' },
      { sn: 'KW', fn: 'Kuwait' },
      { sn: 'KG', fn: 'Kyrgyzstan' }
    ]
  },
  {
    group: 'L', Countries: [

      { sn: 'LA', fn: 'Laos' },
      { sn: 'LV', fn: 'Latvia' },
      { sn: 'LB', fn: 'Lebanon' },
      { sn: 'LS', fn: 'Lesotho' },
      { sn: 'LR', fn: 'Liberia' },
      { sn: 'LY', fn: 'Libya' },
      { sn: 'LI', fn: 'Liechtenstein' },
      { sn: 'LT', fn: 'Lithuania' },
      { sn: 'LU', fn: 'Luxembourg' }
    ]
  },
  {
    group: 'M', Countries: [

      { sn: 'MO', fn: 'Macao S.A.R., China' },
      { sn: 'MK', fn: 'Macedonia' },
      { sn: 'MG', fn: 'Madagascar' },
      { sn: 'MW', fn: 'Malawi' },
      { sn: 'MY', fn: 'Malaysia' },
      { sn: 'MV', fn: 'Maldives' },
      { sn: 'ML', fn: 'Mali' },
      { sn: 'MT', fn: 'Malta' },
      { sn: 'MH', fn: 'Marshall Islands' },
      { sn: 'MQ', fn: 'Martinique' },
      { sn: 'MR', fn: 'Mauritania' },
      { sn: 'MU', fn: 'Mauritius' },
      { sn: 'YT', fn: 'Mayotte' },
      { sn: 'MX', fn: 'Mexico' },
      { sn: 'FM', fn: 'Micronesia' },
      { sn: 'MD', fn: 'Moldova' },
      { sn: 'MC', fn: 'Monaco' },
      { sn: 'MN', fn: 'Mongolia' },
      { sn: 'ME', fn: 'Montenegro' },
      { sn: 'MS', fn: 'Montserrat' },
      { sn: 'MA', fn: 'Morocco' },
      { sn: 'MZ', fn: 'Mozambique' },
      { sn: 'MM', fn: 'Myanmar' }
    ]
  },
  {
    group: 'N', Countries: [

      { sn: 'NA', fn: 'Namibia' },
      { sn: 'NR', fn: 'Nauru' },
      { sn: 'NP', fn: 'Nepal' },
      { sn: 'NL', fn: 'Netherlands' },
      { sn: 'NC', fn: 'New Caledonia' },
      { sn: 'NZ', fn: 'New Zealand' },
      { sn: 'NI', fn: 'Nicaragua' },
      { sn: 'NE', fn: 'Niger' },
      { sn: 'NG', fn: 'Nigeria' },
      { sn: 'NU', fn: 'Niue' },
      { sn: 'NF', fn: 'Norfolk Island' },
      { sn: 'MP', fn: 'Northern Mariana Islands' },
      { sn: 'KP', fn: 'North Korea' },
      { sn: 'NO', fn: 'Norway' }
    ]
  },
  {
    group: 'O', Countries: [

      { sn: 'OM', fn: 'Oman' }
    ]
  },
  {
    group: 'P', Countries: [

      { sn: 'PK', fn: 'Pakistan' },
      { sn: 'PS', fn: 'Palestinian Territory' },
      { sn: 'PA', fn: 'Panama' },
      { sn: 'PG', fn: 'Papua New Guinea' },
      { sn: 'PY', fn: 'Paraguay' },
      { sn: 'PE', fn: 'Peru' },
      { sn: 'PH', fn: 'Philippines' },
      { sn: 'PN', fn: 'Pitcairn' },
      { sn: 'PL', fn: 'Poland' },
      { sn: 'PT', fn: 'Portugal' },
      { sn: 'PR', fn: 'Puerto Rico' }
    ]
  },
  {
    group: 'Q', Countries: [

      { sn: 'QA', fn: 'Qatar' }
    ]
  },
  {
    group: 'R', Countries: [

      { sn: 'RE', fn: 'Reunion' },
      { sn: 'RO', fn: 'Romania' },
      { sn: 'RU', fn: 'Russia' },
      { sn: 'RW', fn: 'Rwanda' }
    ]
  },
  {
    group: 'S', Countries: [

      { sn: 'BL', fn: 'Saint Barth&eacute;lemy' },
      { sn: 'SH', fn: 'Saint Helena' },
      { sn: 'KN', fn: 'Saint Kitts and Nevis' },
      { sn: 'LC', fn: 'Saint Lucia' },
      { sn: 'MF', fn: 'Saint Martin (French part)' },
      { sn: 'SX', fn: 'Saint Martin (Dutch part)' },
      { sn: 'PM', fn: 'Saint Pierre and Miquelon' },
      { sn: 'VC', fn: 'Saint Vincent and the Grenadines' },
      { sn: 'SM', fn: 'San Marino' },
      { sn: 'ST', fn: 'S&atilde;o Tom&eacute; and Pr&iacute;ncipe' },
      { sn: 'SA', fn: 'Saudi Arabia' },
      { sn: 'SN', fn: 'Senegal' },
      { sn: 'RS', fn: 'Serbia' },
      { sn: 'SC', fn: 'Seychelles' },
      { sn: 'SL', fn: 'Sierra Leone' },
      { sn: 'SG', fn: 'Singapore' },
      { sn: 'SK', fn: 'Slovakia' },
      { sn: 'SI', fn: 'Slovenia' },
      { sn: 'SB', fn: 'Solomon Islands' },
      { sn: 'SO', fn: 'Somalia' },
      { sn: 'ZA', fn: 'South Africa' },
      { sn: 'GS', fn: 'South Georgia/Sandwich Islands' },
      { sn: 'KR', fn: 'South Korea' },
      { sn: 'SS', fn: 'South Sudan' },
      { sn: 'ES', fn: 'Spain' },
      { sn: 'LK', fn: 'Sri Lanka' },
      { sn: 'SD', fn: 'Sudan' },
      { sn: 'SR', fn: 'Suriname' },
      { sn: 'SJ', fn: 'Svalbard and Jan Mayen' },
      { sn: 'SZ', fn: 'Swaziland' },
      { sn: 'SE', fn: 'Sweden' },
      { sn: 'CH', fn: 'Switzerland' },
      { sn: 'SY', fn: 'Syria' },
      { sn: 'WS', fn: 'Samoa' }
    ]
  },
  {
    group: 'T', Countries: [

      { sn: 'TW', fn: 'Taiwan' },
      { sn: 'TJ', fn: 'Tajikistan' },
      { sn: 'TZ', fn: 'Tanzania' },
      { sn: 'TH', fn: 'Thailand' },
      { sn: 'TL', fn: 'Timor-Leste' },
      { sn: 'TG', fn: 'Togo' },
      { sn: 'TK', fn: 'Tokelau' },
      { sn: 'TO', fn: 'Tonga' },
      { sn: 'TT', fn: 'Trinidad and Tobago' },
      { sn: 'TN', fn: 'Tunisia' },
      { sn: 'TR', fn: 'Turkey' },
      { sn: 'TM', fn: 'Turkmenistan' },
      { sn: 'TC', fn: 'Turks and Caicos Islands' },
      { sn: 'TV', fn: 'Tuvalu' },
    ]
  },
  {
    group: 'U', Countries: [

      { sn: 'UG', fn: 'Uganda' },
      { sn: 'UA', fn: 'Ukraine' },
      { sn: 'AE', fn: 'United Arab Emirates' },
      { sn: 'GB', fn: 'United Kingdom (UK)' },
      { sn: 'US', fn: 'United States (US)' },
      { sn: 'UM', fn: 'United States (US) Minor Outlying Islands' },
      { sn: 'VI', fn: 'United States (US) Virgin Islands' },
      { sn: 'UY', fn: 'Uruguay' },
      { sn: 'UZ', fn: 'Uzbekistan' }
    ]
  },
  {
    group: 'V', Countries: [

      { sn: 'VU', fn: 'Vanuatu' },
      { sn: 'VA', fn: 'Vatican' },
      { sn: 'VE', fn: 'Venezuela' },
      { sn: 'VN', fn: 'Vietnam' }
    ]
  },
  {
    group: 'W', Countries: [

      { sn: 'WF', fn: 'Wallis and Futuna' },
      { sn: 'EH', fn: 'Western Sahara' }
    ]
  },
  {
    group: 'Y', Countries: [

      { sn: 'YE', fn: 'Yemen' }
    ]
  },
  {
    group: 'Z', Countries: [

      { sn: 'ZM', fn: 'Zambia' },
      { sn: 'ZW', fn: 'Zimbabwe' }
    ]
  }
];

export class Country {
  constructor(
    public sn: string,
    public fn: string
  ) { }
}

export class GourpCountry {
  constructor(
    public group: string,
    public Countries: Country[]
  ) { }
}