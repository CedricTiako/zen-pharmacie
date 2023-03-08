import { error } from 'protractor';
/* eslint-disable curly */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import {Country} from '../../models/country';
import {AlertService} from "../../services/alert/alert.service";
import {AlertController} from "@ionic/angular";
import { CountryService } from 'src/app/services/country/country.service';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {UserService} from '../../services/user/user.service';
import {User} from "../../models/user";
import {GroupMicroService} from "../../models/groupMicroService";
import { CityService } from 'src/app/services/cities/city.service';

declare const reload: any;

@Component({
  selector: 'app-choose-country',
  templateUrl: './choose-country.component.html',
  styleUrls: ['./choose-country.component.scss'],
})
export class ChooseCountryComponent implements OnInit {

  inputPays: any[] = [];
  idPaySelect: any;
  currentUser: User;
  isLoading = false;
  paySelect: any;
  cities_civ: any[]=[];
  cities_cmr: any[]=[];
  cities_ben: any[]=[];
  cities_gab: any[]=[];
  cities_gha: any[]=[];
  cities_gin: any[]=[];
  cities_ken: any[]=[];
  cities_lbr: any[]=[];
  cities: any[]=[];
  city: any;
  Contries: any=[];
  county: any;

  constructor(private alertService: AlertService,
    private alertController: AlertController,
    private countryService: CountryService, private authService: AuthentificationService,
    private userService: UserService,
    private cityService: CityService) {
    this.Contries=[
      {
          "name": "Benin",
          "topLevelDomain": [
              ".bj"
          ],
          "alpha2Code": "BJ",
          "alpha3Code": "BEN",
          "callingCodes": [
              "229"
          ],
          "capital": "Porto-Novo",
          "altSpellings": [
              "BJ",
              "Republic of Benin",
              "République du Bénin"
          ],
          "subregion": "Western Africa",
          "region": "Africa",
          "population": 12123198,
          "latlng": [
              9.5,
              2.25
          ],
          "demonym": "Beninese",
          "area": 112622,
          "gini": 47.8,
          "timezones": [
              "UTC+01:00"
          ],
          "borders": [
              "BFA",
              "NER",
              "NGA",
              "TGO"
          ],
          "nativeName": "Bénin",
          "numericCode": "204",
          "flags": {
              "svg": "https://flagcdn.com/bj.svg",
              "png": "https://flagcdn.com/w320/bj.png"
          },
          "currencies": [
              {
                  "code": "XOF",
                  "name": "West African CFA franc",
                  "symbol": "Fr"
              }
          ],
          "languages": [
              {
                  "iso639_1": "fr",
                  "iso639_2": "fra",
                  "name": "French",
                  "nativeName": "français"
              }
          ],
          "translations": {
              "br": "Benin",
              "pt": "Benim",
              "nl": "Benin",
              "hr": "Benin",
              "fa": "بنین",
              "de": "Benin",
              "es": "Benín",
              "fr": "Bénin",
              "ja": "ベナン",
              "it": "Benin",
              "hu": "Benin"
          },
          "flag": "https://flagcdn.com/bj.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "BEN",
          "independent": true
      },
      {
          "name": "Cameroon",
          "topLevelDomain": [
              ".cm"
          ],
          "alpha2Code": "CM",
          "alpha3Code": "CMR",
          "callingCodes": [
              "237"
          ],
          "capital": "Yaoundé",
          "altSpellings": [
              "CM",
              "Republic of Cameroon",
              "République du Cameroun"
          ],
          "subregion": "Middle Africa",
          "region": "Africa",
          "population": 26545864,
          "latlng": [
              6,
              12
          ],
          "demonym": "Cameroonian",
          "area": 475442,
          "gini": 46.6,
          "timezones": [
              "UTC+01:00"
          ],
          "borders": [
              "CAF",
              "TCD",
              "COG",
              "GNQ",
              "GAB",
              "NGA"
          ],
          "nativeName": "Cameroon",
          "numericCode": "120",
          "flags": {
              "svg": "https://flagcdn.com/cm.svg",
              "png": "https://flagcdn.com/w320/cm.png"
          },
          "currencies": [
              {
                  "code": "XAF",
                  "name": "Central African CFA franc",
                  "symbol": "Fr"
              }
          ],
          "languages": [
              {
                  "iso639_1": "en",
                  "iso639_2": "eng",
                  "name": "English",
                  "nativeName": "English"
              },
              {
                  "iso639_1": "fr",
                  "iso639_2": "fra",
                  "name": "French",
                  "nativeName": "français"
              }
          ],
          "translations": {
              "br": "Kameroun",
              "pt": "Camarões",
              "nl": "Kameroen",
              "hr": "Kamerun",
              "fa": "کامرون",
              "de": "Kamerun",
              "es": "Camerún",
              "fr": "Cameroun",
              "ja": "カメルーン",
              "it": "Camerun",
              "hu": "Kamerun"
          },
          "flag": "https://flagcdn.com/cm.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "CMR",
          "independent": true
      },
      {
          "name": "Gabon",
          "topLevelDomain": [
              ".ga"
          ],
          "alpha2Code": "GA",
          "alpha3Code": "GAB",
          "callingCodes": [
              "241"
          ],
          "capital": "Libreville",
          "altSpellings": [
              "GA",
              "Gabonese Republic",
              "République Gabonaise"
          ],
          "subregion": "Middle Africa",
          "region": "Africa",
          "population": 2225728,
          "latlng": [
              -1,
              11.75
          ],
          "demonym": "Gabonese",
          "area": 267668,
          "gini": 38,
          "timezones": [
              "UTC+01:00"
          ],
          "borders": [
              "CMR",
              "COG",
              "GNQ"
          ],
          "nativeName": "Gabon",
          "numericCode": "266",
          "flags": {
              "svg": "https://flagcdn.com/ga.svg",
              "png": "https://flagcdn.com/w320/ga.png"
          },
          "currencies": [
              {
                  "code": "XAF",
                  "name": "Central African CFA franc",
                  "symbol": "Fr"
              }
          ],
          "languages": [
              {
                  "iso639_1": "fr",
                  "iso639_2": "fra",
                  "name": "French",
                  "nativeName": "français"
              }
          ],
          "translations": {
              "br": "Gabon",
              "pt": "Gabão",
              "nl": "Gabon",
              "hr": "Gabon",
              "fa": "گابن",
              "de": "Gabun",
              "es": "Gabón",
              "fr": "Gabon",
              "ja": "ガボン",
              "it": "Gabon",
              "hu": "Gabon"
          },
          "flag": "https://flagcdn.com/ga.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "GAB",
          "independent": true
      },
      {
          "name": "Ghana",
          "topLevelDomain": [
              ".gh"
          ],
          "alpha2Code": "GH",
          "alpha3Code": "GHA",
          "callingCodes": [
              "233"
          ],
          "capital": "Accra",
          "altSpellings": [
              "GH"
          ],
          "subregion": "Western Africa",
          "region": "Africa",
          "population": 31072945,
          "latlng": [
              8,
              -2
          ],
          "demonym": "Ghanaian",
          "area": 238533,
          "gini": 43.5,
          "timezones": [
              "UTC"
          ],
          "borders": [
              "BFA",
              "CIV",
              "TGO"
          ],
          "nativeName": "Ghana",
          "numericCode": "288",
          "flags": {
              "svg": "https://flagcdn.com/gh.svg",
              "png": "https://flagcdn.com/w320/gh.png"
          },
          "currencies": [
              {
                  "code": "GHS",
                  "name": "Ghanaian cedi",
                  "symbol": "₵"
              }
          ],
          "languages": [
              {
                  "iso639_1": "en",
                  "iso639_2": "eng",
                  "name": "English",
                  "nativeName": "English"
              }
          ],
          "translations": {
              "br": "Ghana",
              "pt": "Gana",
              "nl": "Ghana",
              "hr": "Gana",
              "fa": "غنا",
              "de": "Ghana",
              "es": "Ghana",
              "fr": "Ghana",
              "ja": "ガーナ",
              "it": "Ghana",
              "hu": "Ghána"
          },
          "flag": "https://flagcdn.com/gh.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "GHA",
          "independent": true
      },
      {
          "name": "Guinea",
          "topLevelDomain": [
              ".gn"
          ],
          "alpha2Code": "GN",
          "alpha3Code": "GIN",
          "callingCodes": [
              "224"
          ],
          "capital": "Conakry",
          "altSpellings": [
              "GN",
              "Republic of Guinea",
              "République de Guinée"
          ],
          "subregion": "Western Africa",
          "region": "Africa",
          "population": 13132792,
          "latlng": [
              11,
              -10
          ],
          "demonym": "Guinean",
          "area": 245857,
          "gini": 33.7,
          "timezones": [
              "UTC"
          ],
          "borders": [
              "CIV",
              "GNB",
              "LBR",
              "MLI",
              "SEN",
              "SLE"
          ],
          "nativeName": "Guinée",
          "numericCode": "324",
          "flags": {
              "svg": "https://flagcdn.com/gn.svg",
              "png": "https://flagcdn.com/w320/gn.png"
          },
          "currencies": [
              {
                  "code": "GNF",
                  "name": "Guinean franc",
                  "symbol": "Fr"
              }
          ],
          "languages": [
              {
                  "iso639_1": "fr",
                  "iso639_2": "fra",
                  "name": "French",
                  "nativeName": "français"
              },
              {
                  "iso639_1": "ff",
                  "iso639_2": "ful",
                  "name": "Fula",
                  "nativeName": "Fulfulde"
              }
          ],
          "translations": {
              "br": "Ginea",
              "pt": "Guiné",
              "nl": "Guinee",
              "hr": "Gvineja",
              "fa": "گینه",
              "de": "Guinea",
              "es": "Guinea",
              "fr": "Guinée",
              "ja": "ギニア",
              "it": "Guinea",
              "hu": "Guinea"
          },
          "flag": "https://flagcdn.com/gn.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "GUI",
          "independent": true
      },
      {
          "name": "Ivory Coast",
          "topLevelDomain": [
              ".ci"
          ],
          "alpha2Code": "CI",
          "alpha3Code": "CIV",
          "callingCodes": [
              "225"
          ],
          "capital": "Yamoussoukro",
          "altSpellings": [
              "CI",
              "Ivory Coast",
              "Republic of Côte d'Ivoire",
              "République de Côte d'Ivoire"
          ],
          "subregion": "Western Africa",
          "region": "Africa",
          "population": 26378275,
          "latlng": [
              8,
              -5
          ],
          "demonym": "Ivorian",
          "area": 322463,
          "gini": 41.5,
          "timezones": [
              "UTC"
          ],
          "borders": [
              "BFA",
              "GHA",
              "GIN",
              "LBR",
              "MLI"
          ],
          "nativeName": "Côte d'Ivoire",
          "numericCode": "384",
          "flags": {
              "svg": "https://flagcdn.com/ci.svg",
              "png": "https://flagcdn.com/w320/ci.png"
          },
          "currencies": [
              {
                  "code": "XOF",
                  "name": "West African CFA franc",
                  "symbol": "Fr"
              }
          ],
          "languages": [
              {
                  "iso639_1": "fr",
                  "iso639_2": "fra",
                  "name": "French",
                  "nativeName": "français"
              }
          ],
          "translations": {
              "br": "Aod an Olifant",
              "pt": "Costa do Marfim",
              "nl": "Ivoorkust",
              "hr": "Obala Bjelokosti",
              "fa": "ساحل عاج",
              "de": "Elfenbeinküste",
              "es": "Costa de Marfil",
              "fr": "Côte d'Ivoire",
              "ja": "コートジボワール",
              "it": "Costa D'Avorio",
              "hu": "Elefántcsontpart"
          },
          "flag": "https://flagcdn.com/ci.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "CIV",
          "independent": true
      },
      {
          "name": "Kenya",
          "topLevelDomain": [
              ".ke"
          ],
          "alpha2Code": "KE",
          "alpha3Code": "KEN",
          "callingCodes": [
              "254"
          ],
          "capital": "Nairobi",
          "altSpellings": [
              "KE",
              "Republic of Kenya",
              "Jamhuri ya Kenya"
          ],
          "subregion": "Eastern Africa",
          "region": "Africa",
          "population": 53771300,
          "latlng": [
              1,
              38
          ],
          "demonym": "Kenyan",
          "area": 580367,
          "gini": 40.8,
          "timezones": [
              "UTC+03:00"
          ],
          "borders": [
              "ETH",
              "SOM",
              "SSD",
              "TZA",
              "UGA"
          ],
          "nativeName": "Kenya",
          "numericCode": "404",
          "flags": {
              "svg": "https://flagcdn.com/ke.svg",
              "png": "https://flagcdn.com/w320/ke.png"
          },
          "currencies": [
              {
                  "code": "KES",
                  "name": "Kenyan shilling",
                  "symbol": "Sh"
              }
          ],
          "languages": [
              {
                  "iso639_1": "en",
                  "iso639_2": "eng",
                  "name": "English",
                  "nativeName": "English"
              },
              {
                  "iso639_1": "sw",
                  "iso639_2": "swa",
                  "name": "Swahili",
                  "nativeName": "Kiswahili"
              }
          ],
          "translations": {
              "br": "Kenya",
              "pt": "Quénia",
              "nl": "Kenia",
              "hr": "Kenija",
              "fa": "کنیا",
              "de": "Kenia",
              "es": "Kenia",
              "fr": "Kenya",
              "ja": "ケニア",
              "it": "Kenya",
              "hu": "Kenya"
          },
          "flag": "https://flagcdn.com/ke.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "KEN",
          "independent": true
      },
      {
          "name": "Liberia",
          "topLevelDomain": [
              ".lr"
          ],
          "alpha2Code": "LR",
          "alpha3Code": "LBR",
          "callingCodes": [
              "231"
          ],
          "capital": "Monrovia",
          "altSpellings": [
              "LR",
              "Republic of Liberia"
          ],
          "subregion": "Western Africa",
          "region": "Africa",
          "population": 5057677,
          "latlng": [
              6.5,
              -9.5
          ],
          "demonym": "Liberian",
          "area": 111369,
          "gini": 35.3,
          "timezones": [
              "UTC"
          ],
          "borders": [
              "GIN",
              "CIV",
              "SLE"
          ],
          "nativeName": "Liberia",
          "numericCode": "430",
          "flags": {
              "svg": "https://flagcdn.com/lr.svg",
              "png": "https://flagcdn.com/w320/lr.png"
          },
          "currencies": [
              {
                  "code": "LRD",
                  "name": "Liberian dollar",
                  "symbol": "$"
              }
          ],
          "languages": [
              {
                  "iso639_1": "en",
                  "iso639_2": "eng",
                  "name": "English",
                  "nativeName": "English"
              }
          ],
          "translations": {
              "br": "Liberia",
              "pt": "Libéria",
              "nl": "Liberia",
              "hr": "Liberija",
              "fa": "لیبریا",
              "de": "Liberia",
              "es": "Liberia",
              "fr": "Liberia",
              "ja": "リベリア",
              "it": "Liberia",
              "hu": "Libéria"
          },
          "flag": "https://flagcdn.com/lr.svg",
          "regionalBlocs": [
              {
                  "acronym": "AU",
                  "name": "African Union",
                  "otherNames": [
                      "الاتحاد الأفريقي",
                      "Union africaine",
                      "União Africana",
                      "Unión Africana",
                      "Umoja wa Afrika"
                  ]
              }
          ],
          "cioc": "LBR",
          "independent": true
      }
    ];

    this.cities_civ=
    [
        {
            "city": "Abidjan",
            "city_ascii": "Abidjan",
            "lat": 5.3364,
            "lng": -4.0267,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Abidjan",
            "capital": "primary",
            "population": 4980000,
            "id": 1384207980
        },
        {
            "city": "Yamoussoukro",
            "city_ascii": "Yamoussoukro",
            "lat": 6.8161,
            "lng": -5.2742,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Yamoussoukro",
            "capital": "primary",
            "population": 355573,
            "id": 1384683557
        },
        {
            "city": "Bouaké",
            "city_ascii": "Bouake",
            "lat": 7.6833,
            "lng": -5.0331,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Vallée du Bandama",
            "capital": "admin",
            "population": 659233,
            "id": 1384983838
        },
        {
            "city": "Korhogo",
            "city_ascii": "Korhogo",
            "lat": 9.4578,
            "lng": -5.6294,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Savanes",
            "capital": "admin",
            "population": 286071,
            "id": 1384205840
        },
        {
            "city": "Daloa",
            "city_ascii": "Daloa",
            "lat": 6.89,
            "lng": -6.45,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Sassandra-Marahoué",
            "capital": "admin",
            "population": 255168,
            "id": 1384564974
        },
        {
            "city": "San-Pédro",
            "city_ascii": "San-Pedro",
            "lat": 4.7704,
            "lng": -6.64,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Bas-Sassandra",
            "capital": "admin",
            "population": 210273,
            "id": 1384436547
        },
        {
            "city": "Divo",
            "city_ascii": "Divo",
            "lat": 5.8372,
            "lng": -5.3572,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Gôh-Djiboua",
            "capital": "minor",
            "population": 179455,
            "id": 1384831436
        },
        {
            "city": "Man",
            "city_ascii": "Man",
            "lat": 7.4004,
            "lng": -7.55,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Montagnes",
            "capital": "admin",
            "population": 146974,
            "id": 1384112524
        },
        {
            "city": "Gagnoa",
            "city_ascii": "Gagnoa",
            "lat": 6.1333,
            "lng": -5.9333,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Gôh-Djiboua",
            "capital": "admin",
            "population": 123184,
            "id": 1384138010
        },
        {
            "city": "Soubré",
            "city_ascii": "Soubre",
            "lat": 5.7836,
            "lng": -6.5939,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Bas-Sassandra",
            "capital": "minor",
            "population": 108933,
            "id": 1384745470
        },
        {
            "city": "Abengourou",
            "city_ascii": "Abengourou",
            "lat": 6.7297,
            "lng": -3.4964,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Comoé",
            "capital": "admin",
            "population": 104020,
            "id": 1384295898
        },
        {
            "city": "Dabou",
            "city_ascii": "Dabou",
            "lat": 5.3256,
            "lng": -4.3767,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Lagunes",
            "capital": "admin",
            "population": 72913,
            "id": 1384274793
        },
        {
            "city": "Dimbokro",
            "city_ascii": "Dimbokro",
            "lat": 6.6505,
            "lng": -4.71,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Lacs",
            "capital": "admin",
            "population": 67349,
            "id": 1384235566
        },
        {
            "city": "Bondoukou",
            "city_ascii": "Bondoukou",
            "lat": 8.0304,
            "lng": -2.8,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Zanzan",
            "capital": "admin",
            "population": 58297,
            "id": 1384649653
        },
        {
            "city": "Séguéla",
            "city_ascii": "Seguela",
            "lat": 7.9611,
            "lng": -6.6731,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Woroba",
            "capital": "admin",
            "population": 51157,
            "id": 1384639807
        },
        {
            "city": "Odienné",
            "city_ascii": "Odienne",
            "lat": 9.5,
            "lng": -7.5667,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Denguélé",
            "capital": "admin",
            "population": 49857,
            "id": 1384967993
        },
        {
            "city": "Bangolo",
            "city_ascii": "Bangolo",
            "lat": 7.0123,
            "lng": -7.4864,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Montagnes",
            "capital": "admin",
            "population": "",
            "id": 1384048438
        },
        {
            "city": "Agboville",
            "city_ascii": "Agboville",
            "lat": 5.9333,
            "lng": -4.2167,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Lagunes",
            "capital": "minor",
            "population": 81770,
            "id": 1384823872
        },
        {
            "city": "Grand-Bassam",
            "city_ascii": "Grand-Bassam",
            "lat": 5.2,
            "lng": -3.7333,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Comoé",
            "capital": "minor",
            "population": 73772,
            "id": 1384167408
        },
        {
            "city": "Bouaflé",
            "city_ascii": "Bouafle",
            "lat": 6.9903,
            "lng": -5.7442,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Sassandra-Marahoué",
            "capital": "minor",
            "population": 71792,
            "id": 1384274339
        },
        {
            "city": "Guiglo",
            "city_ascii": "Guiglo",
            "lat": 6.5436,
            "lng": -7.4933,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Montagnes",
            "capital": "minor",
            "population": 63643,
            "id": 1384483732
        },
        {
            "city": "Ferkessédougou",
            "city_ascii": "Ferkessedougou",
            "lat": 9.5928,
            "lng": -5.1944,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Savanes",
            "capital": "minor",
            "population": 62008,
            "id": 1384974005
        },
        {
            "city": "Toumodi",
            "city_ascii": "Toumodi",
            "lat": 6.552,
            "lng": -5.019,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Lacs",
            "capital": "minor",
            "population": 39005,
            "id": 1384416676
        },
        {
            "city": "Sassandra",
            "city_ascii": "Sassandra",
            "lat": 4.9504,
            "lng": -6.0833,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Bas-Sassandra",
            "capital": "minor",
            "population": 38411,
            "id": 1384107875
        },
        {
            "city": "Aboisso",
            "city_ascii": "Aboisso",
            "lat": 5.4667,
            "lng": -3.2,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Comoé",
            "capital": "minor",
            "population": 37654,
            "id": 1384385857
        },
        {
            "city": "Touba",
            "city_ascii": "Touba",
            "lat": 8.2833,
            "lng": -7.6833,
            "country": "Côte d'Ivoire",
            "iso2": "CI",
            "iso3": "CIV",
            "admin_name": "Woroba",
            "capital": "minor",
            "population": 31844,
            "id": 1384485647
        }
    ];

    this.cities_cmr=[
      {
          "city": "Yaoundé",
          "city_ascii": "Yaounde",
          "lat": 3.8578,
          "lng": 11.5181,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Centre",
          "capital": "primary",
          "population": 2440462,
          "id": 1120298240
      },
      {
          "city": "Douala",
          "city_ascii": "Douala",
          "lat": 4.05,
          "lng": 9.7,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Littoral",
          "capital": "admin",
          "population": 2446945,
          "id": 1120494607
      },
      {
          "city": "Maroua",
          "city_ascii": "Maroua",
          "lat": 10.5823,
          "lng": 14.3275,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Extrême-Nord",
          "capital": "admin",
          "population": 319941,
          "id": 1120956931
      },
      {
          "city": "Bafoussam",
          "city_ascii": "Bafoussam",
          "lat": 5.4667,
          "lng": 10.4167,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Ouest",
          "capital": "admin",
          "population": 290768,
          "id": 1120435460
      },
      {
          "city": "Bamenda",
          "city_ascii": "Bamenda",
          "lat": 5.9333,
          "lng": 10.1667,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "North-West",
          "capital": "admin",
          "population": 269530,
          "id": 1120909610
      },
      {
          "city": "Garoua",
          "city_ascii": "Garoua",
          "lat": 9.3,
          "lng": 13.4,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Nord",
          "capital": "admin",
          "population": 235996,
          "id": 1120803808
      },
      {
          "city": "Limbe",
          "city_ascii": "Limbe",
          "lat": 4.0167,
          "lng": 9.2167,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "South-West",
          "capital": "",
          "population": 212474,
          "id": 1120635273
      },
      {
          "city": "Ngaoundéré",
          "city_ascii": "Ngaoundere",
          "lat": 7.3214,
          "lng": 13.5839,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Adamaoua",
          "capital": "admin",
          "population": 189800,
          "id": 1120011020
      },
      {
          "city": "Kumba",
          "city_ascii": "Kumba",
          "lat": 4.6333,
          "lng": 9.45,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "South-West",
          "capital": "",
          "population": 144268,
          "id": 1120492761
      },
      {
          "city": "Buea",
          "city_ascii": "Buea",
          "lat": 4.1667,
          "lng": 9.2333,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "South-West",
          "capital": "admin",
          "population": 131325,
          "id": 1120497849
      },
      {
          "city": "Kumbo",
          "city_ascii": "Kumbo",
          "lat": 6.2,
          "lng": 10.66,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "North-West",
          "capital": "",
          "population": 125486,
          "id": 1120679288
      },
      {
          "city": "Edéa",
          "city_ascii": "Edea",
          "lat": 3.8,
          "lng": 10.1333,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Littoral",
          "capital": "",
          "population": 122300,
          "id": 1120546542
      },
      {
          "city": "Nkongsamba",
          "city_ascii": "Nkongsamba",
          "lat": 4.95,
          "lng": 9.9167,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Littoral",
          "capital": "",
          "population": 117063,
          "id": 1120972098
      },
      {
          "city": "Kousséri",
          "city_ascii": "Kousseri",
          "lat": 12.0833,
          "lng": 15.0333,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Extrême-Nord",
          "capital": "",
          "population": 101246,
          "id": 1120996697
      },
      {
          "city": "Bertoua",
          "city_ascii": "Bertoua",
          "lat": 4.5833,
          "lng": 13.6833,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Est",
          "capital": "admin",
          "population": 88462,
          "id": 1120406967
      },
      {
          "city": "Ébolowa",
          "city_ascii": "Ebolowa",
          "lat": 2.9,
          "lng": 11.15,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Sud",
          "capital": "admin",
          "population": 87875,
          "id": 1120924207
      },
      {
          "city": "Bogo",
          "city_ascii": "Bogo",
          "lat": 10.7361,
          "lng": 14.6108,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Extrême-Nord",
          "capital": "",
          "population": 95230,
          "id": 1120371347
      },
      {
          "city": "Bafang",
          "city_ascii": "Bafang",
          "lat": 5.1704,
          "lng": 10.18,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Ouest",
          "capital": "",
          "population": 93145,
          "id": 1120889812
      },
      {
          "city": "Foumban",
          "city_ascii": "Foumban",
          "lat": 5.7167,
          "lng": 10.9167,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Ouest",
          "capital": "",
          "population": 92673,
          "id": 1120088650
      },
      {
          "city": "Guider",
          "city_ascii": "Guider",
          "lat": 9.9342,
          "lng": 13.9486,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Nord",
          "capital": "",
          "population": 84647,
          "id": 1120662630
      },
      {
          "city": "Mbalmayo",
          "city_ascii": "Mbalmayo",
          "lat": 3.52,
          "lng": 11.5122,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Centre",
          "capital": "",
          "population": 80206,
          "id": 1120049681
      },
      {
          "city": "Meïganga",
          "city_ascii": "Meiganga",
          "lat": 6.5172,
          "lng": 14.2947,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Adamaoua",
          "capital": "",
          "population": 80100,
          "id": 1120789508
      },
      {
          "city": "Dschang",
          "city_ascii": "Dschang",
          "lat": 5.45,
          "lng": 10.05,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Ouest",
          "capital": "",
          "population": 76524,
          "id": 1120569504
      },
      {
          "city": "Tibati",
          "city_ascii": "Tibati",
          "lat": 6.4669,
          "lng": 12.6158,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Adamaoua",
          "capital": "",
          "population": 72081,
          "id": 1120299131
      },
      {
          "city": "Bafia",
          "city_ascii": "Bafia",
          "lat": 4.7425,
          "lng": 11.2247,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Centre",
          "capital": "",
          "population": 69270,
          "id": 1120310806
      },
      {
          "city": "Wum",
          "city_ascii": "Wum",
          "lat": 6.3833,
          "lng": 10.0667,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "North-West",
          "capital": "",
          "population": 68836,
          "id": 1120557987
      },
      {
          "city": "Kribi",
          "city_ascii": "Kribi",
          "lat": 2.95,
          "lng": 9.9167,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Sud",
          "capital": "",
          "population": 60000,
          "id": 1120360100
      },
      {
          "city": "Batouri",
          "city_ascii": "Batouri",
          "lat": 4.4333,
          "lng": 14.3667,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Est",
          "capital": "",
          "population": 33594,
          "id": 1120380999
      },
      {
          "city": "Kalfou",
          "city_ascii": "Kalfou",
          "lat": 10.284,
          "lng": 14.9298,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Extrême-Nord",
          "capital": "",
          "population": 26223,
          "id": 1120297396
      },
      {
          "city": "Bélabo",
          "city_ascii": "Belabo",
          "lat": 4.9333,
          "lng": 13.3,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Est",
          "capital": "",
          "population": 22553,
          "id": 1120106572
      },
      {
          "city": "Eséka",
          "city_ascii": "Eseka",
          "lat": 3.6504,
          "lng": 10.7666,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Centre",
          "capital": "",
          "population": 22221,
          "id": 1120064220
      },
      {
          "city": "Abong Mbang",
          "city_ascii": "Abong Mbang",
          "lat": 3.9833,
          "lng": 13.1667,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Est",
          "capital": "",
          "population": 14661,
          "id": 1120726386
      },
      {
          "city": "Bandjoun",
          "city_ascii": "Bandjoun",
          "lat": 5.35,
          "lng": 10.4,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Ouest",
          "capital": "",
          "population": 6872,
          "id": 1120913349
      },
      {
          "city": "Kontcha",
          "city_ascii": "Kontcha",
          "lat": 7.967,
          "lng": 12.2333,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Adamaoua",
          "capital": "",
          "population": 8018,
          "id": 1120016766
      },
      {
          "city": "Aiyomojok",
          "city_ascii": "Aiyomojok",
          "lat": 5.7504,
          "lng": 8.9833,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "South-West",
          "capital": "",
          "population": 5798,
          "id": 1120658014
      },
      {
          "city": "Mbé",
          "city_ascii": "Mbe",
          "lat": 7.8504,
          "lng": 13.6,
          "country": "Cameroon",
          "iso2": "CM",
          "iso3": "CMR",
          "admin_name": "Nord",
          "capital": "",
          "population": 3950,
          "id": 1120400000
      }
    ];

    this.cities_ben=[
    {
        "city": "Cotonou",
        "city_ascii": "Cotonou",
        "lat": 6.402,
        "lng": 2.518,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Littoral",
        "capital": "primary",
        "population": 762000,
        "id": 1204955174
    },
    {
        "city": "Porto-Novo",
        "city_ascii": "Porto-Novo",
        "lat": 6.4833,
        "lng": 2.6167,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Ouémé",
        "capital": "primary",
        "population": 300000,
        "id": 1204172060
    },
    {
        "city": "Djougou",
        "city_ascii": "Djougou",
        "lat": 9.7004,
        "lng": 1.68,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Donga",
        "capital": "admin",
        "population": 202810,
        "id": 1204972666
    },
    {
        "city": "Parakou",
        "city_ascii": "Parakou",
        "lat": 9.34,
        "lng": 2.62,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Borgou",
        "capital": "admin",
        "population": 188853,
        "id": 1204807468
    },
    {
        "city": "Kandi",
        "city_ascii": "Kandi",
        "lat": 11.1304,
        "lng": 2.94,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Alibori",
        "capital": "admin",
        "population": 109701,
        "id": 1204875413
    },
    {
        "city": "Lokossa",
        "city_ascii": "Lokossa",
        "lat": 6.615,
        "lng": 1.715,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Mono",
        "capital": "admin",
        "population": 86971,
        "id": 1204036358
    },
    {
        "city": "Ouidah",
        "city_ascii": "Ouidah",
        "lat": 6.3604,
        "lng": 2.09,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Atlantique",
        "capital": "admin",
        "population": 83503,
        "id": 1204541753
    },
    {
        "city": "Abomey",
        "city_ascii": "Abomey",
        "lat": 7.1853,
        "lng": 1.9914,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Zou",
        "capital": "admin",
        "population": 82154,
        "id": 1204597697
    },
    {
        "city": "Natitingou",
        "city_ascii": "Natitingou",
        "lat": 10.3204,
        "lng": 1.39,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Atacora",
        "capital": "admin",
        "population": 80892,
        "id": 1204752595
    },
    {
        "city": "Dogbo",
        "city_ascii": "Dogbo",
        "lat": 6.8167,
        "lng": 1.7833,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Couffo",
        "capital": "admin",
        "population": "",
        "id": 1204497206
    },
    {
        "city": "Sakété",
        "city_ascii": "Sakete",
        "lat": 6.7362,
        "lng": 2.6587,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Plateau",
        "capital": "admin",
        "population": "",
        "id": 1204601704
    },
    {
        "city": "Savalou",
        "city_ascii": "Savalou",
        "lat": 7.9281,
        "lng": 1.9756,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Collines",
        "capital": "admin",
        "population": "",
        "id": 1204628914
    },
    {
        "city": "Savé",
        "city_ascii": "Save",
        "lat": 8.0342,
        "lng": 2.4866,
        "country": "Benin",
        "iso2": "BJ",
        "iso3": "BEN",
        "admin_name": "Collines",
        "capital": "",
        "population": 31444,
        "id": 1204120625
    }
    ];


    this.cities_gab=[
    {
        "city": "Libreville",
        "city_ascii": "Libreville",
        "lat": 0.3901,
        "lng": 9.4544,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Estuaire",
        "capital": "primary",
        "population": 797003,
        "id": 1266952885
    },
    {
        "city": "Port-Gentil",
        "city_ascii": "Port-Gentil",
        "lat": -0.7167,
        "lng": 8.7833,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ogooué-Maritime",
        "capital": "admin",
        "population": 116836,
        "id": 1266383028
    },
    {
        "city": "Oyem",
        "city_ascii": "Oyem",
        "lat": 1.6,
        "lng": 11.5667,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Woleu-Ntem",
        "capital": "admin",
        "population": 60685,
        "id": 1266867613
    },
    {
        "city": "Franceville",
        "city_ascii": "Franceville",
        "lat": -1.6333,
        "lng": 13.5833,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Haut-Ogooué",
        "capital": "admin",
        "population": 42967,
        "id": 1266537692
    },
    {
        "city": "Lambaréné",
        "city_ascii": "Lambarene",
        "lat": -0.6883,
        "lng": 10.2319,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Moyen-Ogooué",
        "capital": "admin",
        "population": 25310,
        "id": 1266875472
    },
    {
        "city": "Mouila",
        "city_ascii": "Mouila",
        "lat": -1.8667,
        "lng": 11.055,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ngounié",
        "capital": "admin",
        "population": 22469,
        "id": 1266074474
    },
    {
        "city": "Tchibanga",
        "city_ascii": "Tchibanga",
        "lat": -2.9331,
        "lng": 10.9831,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Nyanga",
        "capital": "admin",
        "population": 19365,
        "id": 1266060335
    },
    {
        "city": "Makokou",
        "city_ascii": "Makokou",
        "lat": 0.5667,
        "lng": 12.8667,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ogooué-Ivindo",
        "capital": "admin",
        "population": 17070,
        "id": 1266939354
    },
    {
        "city": "Koulamoutou",
        "city_ascii": "Koulamoutou",
        "lat": -1.1333,
        "lng": 12.4833,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ogooué-Lolo",
        "capital": "admin",
        "population": 16222,
        "id": 1266049565
    },
    {
        "city": "Moanda",
        "city_ascii": "Moanda",
        "lat": -1.5655,
        "lng": 13.2,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Haut-Ogooué",
        "capital": "",
        "population": 30151,
        "id": 1266295581
    },
    {
        "city": "Bitam",
        "city_ascii": "Bitam",
        "lat": 2.0833,
        "lng": 11.4833,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Woleu-Ntem",
        "capital": "",
        "population": 17637,
        "id": 1266921836
    },
    {
        "city": "Mitzic",
        "city_ascii": "Mitzic",
        "lat": 0.7833,
        "lng": 11.5667,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Woleu-Ntem",
        "capital": "",
        "population": 4111,
        "id": 1266866714
    },
    {
        "city": "Mayumba",
        "city_ascii": "Mayumba",
        "lat": -3.4167,
        "lng": 10.65,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Nyanga",
        "capital": "",
        "population": 3996,
        "id": 1266317571
    },
    {
        "city": "Gamba",
        "city_ascii": "Gamba",
        "lat": -2.65,
        "lng": 10,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ogooué-Maritime",
        "capital": "",
        "population": 9928,
        "id": 1266236988
    },
    {
        "city": "Okondja",
        "city_ascii": "Okondja",
        "lat": -0.6829,
        "lng": 13.7833,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Haut-Ogooué",
        "capital": "",
        "population": 7155,
        "id": 1266588926
    },
    {
        "city": "Ndendé",
        "city_ascii": "Ndende",
        "lat": -2.3829,
        "lng": 11.3833,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ngounié",
        "capital": "",
        "population": 6200,
        "id": 1266578957
    },
    {
        "city": "Mékambo",
        "city_ascii": "Mekambo",
        "lat": 1.0171,
        "lng": 13.9333,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ogooué-Ivindo",
        "capital": "",
        "population": 3170,
        "id": 1266553682
    },
    {
        "city": "Omboué",
        "city_ascii": "Omboue",
        "lat": -1.5662,
        "lng": 9.25,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Ogooué-Maritime",
        "capital": "",
        "population": 1667,
        "id": 1266708175
    },
    {
        "city": "Bifoun",
        "city_ascii": "Bifoun",
        "lat": -0.3329,
        "lng": 10.3832,
        "country": "Gabon",
        "iso2": "GA",
        "iso3": "GAB",
        "admin_name": "Moyen-Ogooué",
        "capital": "",
        "population": 134,
        "id": 1266655418
    }
    ];
    this.cities_gha=[
    {
        "city": "Accra",
        "city_ascii": "Accra",
        "lat": 5.6037,
        "lng": -0.187,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Greater Accra",
        "capital": "primary",
        "population": 2291352,
        "id": 1288299415
    },
    {
        "city": "Kumasi",
        "city_ascii": "Kumasi",
        "lat": 6.6833,
        "lng": -1.6167,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Ashanti",
        "capital": "admin",
        "population": 2069350,
        "id": 1288181103
    },
    {
        "city": "Tamale",
        "city_ascii": "Tamale",
        "lat": 9.4075,
        "lng": -0.8533,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "admin",
        "population": 1095808,
        "id": 1288890688
    },
    {
        "city": "Sekondi",
        "city_ascii": "Sekondi",
        "lat": 4.9433,
        "lng": -1.704,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Western",
        "capital": "admin",
        "population": 286248,
        "id": 1288186231
    },
    {
        "city": "Obuase",
        "city_ascii": "Obuase",
        "lat": 6.2,
        "lng": -1.6833,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Ashanti",
        "capital": "",
        "population": 180460,
        "id": 1288615192
    },
    {
        "city": "Tema",
        "city_ascii": "Tema",
        "lat": 5.6667,
        "lng": -0.0167,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Greater Accra",
        "capital": "",
        "population": 161612,
        "id": 1288205885
    },
    {
        "city": "Cape Coast",
        "city_ascii": "Cape Coast",
        "lat": 5.1,
        "lng": -1.25,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Central",
        "capital": "admin",
        "population": 143015,
        "id": 1288506097
    },
    {
        "city": "Koforidua",
        "city_ascii": "Koforidua",
        "lat": 6.1,
        "lng": -0.2667,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Eastern",
        "capital": "admin",
        "population": 127334,
        "id": 1288961962
    },
    {
        "city": "Ho",
        "city_ascii": "Ho",
        "lat": 6.6114,
        "lng": 0.4703,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Volta",
        "capital": "admin",
        "population": 83715,
        "id": 1288938914
    },
    {
        "city": "Wa",
        "city_ascii": "Wa",
        "lat": 10.0667,
        "lng": -2.5,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Upper West",
        "capital": "admin",
        "population": 78107,
        "id": 1288765586
    },
    {
        "city": "Sunyani",
        "city_ascii": "Sunyani",
        "lat": 7.336,
        "lng": -2.336,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Brong-Ahafo",
        "capital": "admin",
        "population": 70299,
        "id": 1288679588
    },
    {
        "city": "Bolgatanga",
        "city_ascii": "Bolgatanga",
        "lat": 10.7856,
        "lng": -0.8514,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Upper East",
        "capital": "admin",
        "population": 66685,
        "id": 1288943371
    },
    {
        "city": "Techiman",
        "city_ascii": "Techiman",
        "lat": 7.5905,
        "lng": -1.9395,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Brong-Ahafo",
        "capital": "admin",
        "population": "",
        "id": 1288222236
    },
    {
        "city": "Sefwi Wiawso",
        "city_ascii": "Sefwi Wiawso",
        "lat": 6.2058,
        "lng": -2.4894,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Western",
        "capital": "admin",
        "population": "",
        "id": 1288994228
    },
    {
        "city": "Dambai",
        "city_ascii": "Dambai",
        "lat": 8.0662,
        "lng": 0.1795,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Volta",
        "capital": "admin",
        "population": "",
        "id": 1288521614
    },
    {
        "city": "Goaso",
        "city_ascii": "Goaso",
        "lat": 6.8036,
        "lng": -2.5172,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Brong-Ahafo",
        "capital": "admin",
        "population": "",
        "id": 1288616024
    },
    {
        "city": "Nalerigu",
        "city_ascii": "Nalerigu",
        "lat": 10.5273,
        "lng": -0.3698,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "admin",
        "population": "",
        "id": 1288845503
    },
    {
        "city": "Damongo",
        "city_ascii": "Damongo",
        "lat": 9.083,
        "lng": -1.8188,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "admin",
        "population": "",
        "id": 1288827226
    },
    {
        "city": "Bawku",
        "city_ascii": "Bawku",
        "lat": 11.06,
        "lng": -0.2422,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Upper East",
        "capital": "",
        "population": 73594,
        "id": 1288067377
    },
    {
        "city": "Aflao",
        "city_ascii": "Aflao",
        "lat": 6.1188,
        "lng": 1.1946,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Volta",
        "capital": "",
        "population": 66546,
        "id": 1288563374
    },
    {
        "city": "Nkawkaw",
        "city_ascii": "Nkawkaw",
        "lat": 6.5505,
        "lng": -0.78,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Eastern",
        "capital": "",
        "population": 62667,
        "id": 1288350107
    },
    {
        "city": "Hohoe",
        "city_ascii": "Hohoe",
        "lat": 7.149,
        "lng": 0.4746,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Volta",
        "capital": "",
        "population": 56202,
        "id": 1288897773
    },
    {
        "city": "Winneba",
        "city_ascii": "Winneba",
        "lat": 5.35,
        "lng": -0.6333,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Central",
        "capital": "",
        "population": 55331,
        "id": 1288886612
    },
    {
        "city": "Berekum",
        "city_ascii": "Berekum",
        "lat": 7.4504,
        "lng": -2.59,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Brong-Ahafo",
        "capital": "",
        "population": 46287,
        "id": 1288257467
    },
    {
        "city": "Yendi",
        "city_ascii": "Yendi",
        "lat": 9.4337,
        "lng": -0.0167,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "",
        "population": 42972,
        "id": 1288631491
    },
    {
        "city": "Keta",
        "city_ascii": "Keta",
        "lat": 5.9167,
        "lng": 0.9833,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Volta",
        "capital": "",
        "population": 22739,
        "id": 1288925538
    },
    {
        "city": "Gumani",
        "city_ascii": "Gumani",
        "lat": 9.45,
        "lng": -0.7667,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "",
        "population": 12506,
        "id": 1288021248
    },
    {
        "city": "Diari",
        "city_ascii": "Diari",
        "lat": 9.8452,
        "lng": -0.8655,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "",
        "population": 12666,
        "id": 1288997321
    },
    {
        "city": "Sang",
        "city_ascii": "Sang",
        "lat": 9.4171,
        "lng": -0.2786,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "",
        "population": 7278,
        "id": 1288879940
    },
    {
        "city": "Kanvile",
        "city_ascii": "Kanvile",
        "lat": 9.4583,
        "lng": -0.8444,
        "country": "Ghana",
        "iso2": "GH",
        "iso3": "GHA",
        "admin_name": "Northern",
        "capital": "",
        "population": 5506,
        "id": 1288687765
    }
    ];
    this.cities_gin=[
      {
          "city": "Conakry",
          "city_ascii": "Conakry",
          "lat": 9.538,
          "lng": -13.6773,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Conakry",
          "capital": "primary",
          "population": 1667864,
          "id": 1324568159
      },
      {
          "city": "Guéckédou",
          "city_ascii": "Gueckedou",
          "lat": 8.5667,
          "lng": -10.1333,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "N’Zérékoré",
          "capital": "minor",
          "population": 221715,
          "id": 1324580681
      },
      {
          "city": "Siguiri",
          "city_ascii": "Siguiri",
          "lat": 11.4189,
          "lng": -9.1644,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Kankan",
          "capital": "minor",
          "population": 183875,
          "id": 1324494896
      },
      {
          "city": "N’Zérékoré",
          "city_ascii": "N'Zerekore",
          "lat": 7.76,
          "lng": -8.83,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "N’Zérékoré",
          "capital": "admin",
          "population": 168121,
          "id": 1324336588
      },
      {
          "city": "Kindia",
          "city_ascii": "Kindia",
          "lat": 10.06,
          "lng": -12.87,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Kindia",
          "capital": "admin",
          "population": 117062,
          "id": 1324348910
      },
      {
          "city": "Boké",
          "city_ascii": "Boke",
          "lat": 10.94,
          "lng": -14.3,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Boké",
          "capital": "admin",
          "population": 116270,
          "id": 1324037897
      },
      {
          "city": "Kankan",
          "city_ascii": "Kankan",
          "lat": 10.39,
          "lng": -9.31,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Kankan",
          "capital": "admin",
          "population": 114009,
          "id": 1324495325
      },
      {
          "city": "Labé",
          "city_ascii": "Labe",
          "lat": 11.3167,
          "lng": -12.2833,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Labé",
          "capital": "admin",
          "population": 107695,
          "id": 1324900784
      },
      {
          "city": "Mamou",
          "city_ascii": "Mamou",
          "lat": 10.3833,
          "lng": -12.0833,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Mamou",
          "capital": "admin",
          "population": 71153,
          "id": 1324990909
      },
      {
          "city": "Faranah",
          "city_ascii": "Faranah",
          "lat": 10.0404,
          "lng": -10.75,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Faranah",
          "capital": "admin",
          "population": 19469,
          "id": 1324603099
      },
      {
          "city": "Forécariah",
          "city_ascii": "Forecariah",
          "lat": 9.43,
          "lng": -13.098,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Kindia",
          "capital": "minor",
          "population": 12358,
          "id": 1324863095
      },
      {
          "city": "Kamsar",
          "city_ascii": "Kamsar",
          "lat": 10.65,
          "lng": -14.6167,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Boké",
          "capital": "",
          "population": 68999,
          "id": 1324075393
      },
      {
          "city": "Kissidougou",
          "city_ascii": "Kissidougou",
          "lat": 9.1905,
          "lng": -10.12,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Faranah",
          "capital": "minor",
          "population": 66815,
          "id": 1324750427
      },
      {
          "city": "Macenta",
          "city_ascii": "Macenta",
          "lat": 8.5504,
          "lng": -9.48,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "N’Zérékoré",
          "capital": "minor",
          "population": 43102,
          "id": 1324817479
      },
      {
          "city": "Dabola",
          "city_ascii": "Dabola",
          "lat": 10.75,
          "lng": -11.1167,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Faranah",
          "capital": "minor",
          "population": 38617,
          "id": 1324368075
      },
      {
          "city": "Télimélé",
          "city_ascii": "Telimele",
          "lat": 10.905,
          "lng": -13.043,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Kindia",
          "capital": "minor",
          "population": 30311,
          "id": 1324315862
      },
      {
          "city": "Tougué",
          "city_ascii": "Tougue",
          "lat": 11.44,
          "lng": -11.67,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Labé",
          "capital": "minor",
          "population": 25531,
          "id": 1324920258
      },
      {
          "city": "Fria",
          "city_ascii": "Fria",
          "lat": 10.3804,
          "lng": -13.55,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Boké",
          "capital": "minor",
          "population": 23729,
          "id": 1324583144
      },
      {
          "city": "Pita",
          "city_ascii": "Pita",
          "lat": 11.08,
          "lng": -12.401,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Mamou",
          "capital": "minor",
          "population": 20052,
          "id": 1324788694
      },
      {
          "city": "Kérouané",
          "city_ascii": "Kerouane",
          "lat": 9.2704,
          "lng": -9.02,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Kankan",
          "capital": "minor",
          "population": 15406,
          "id": 1324580549
      },
      {
          "city": "Koundara",
          "city_ascii": "Koundara",
          "lat": 12.48,
          "lng": -13.296,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Boké",
          "capital": "minor",
          "population": 13990,
          "id": 1324267190
      },
      {
          "city": "Kouroussa",
          "city_ascii": "Kouroussa",
          "lat": 10.653,
          "lng": -9.892,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Kankan",
          "capital": "minor",
          "population": 14223,
          "id": 1324187341
      },
      {
          "city": "Beyla",
          "city_ascii": "Beyla",
          "lat": 8.687,
          "lng": -8.657,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "N’Zérékoré",
          "capital": "minor",
          "population": 13204,
          "id": 1324564039
      },
      {
          "city": "Gaoual",
          "city_ascii": "Gaoual",
          "lat": 11.754,
          "lng": -13.213,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Boké",
          "capital": "minor",
          "population": 7461,
          "id": 1324589428
      },
      {
          "city": "Dalaba",
          "city_ascii": "Dalaba",
          "lat": 10.656,
          "lng": -12.272,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Mamou",
          "capital": "minor",
          "population": 6349,
          "id": 1324455027
      },
      {
          "city": "Dinguiraye",
          "city_ascii": "Dinguiraye",
          "lat": 11.299,
          "lng": -10.726,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Faranah",
          "capital": "minor",
          "population": 6062,
          "id": 1324546502
      },
      {
          "city": "Mali",
          "city_ascii": "Mali",
          "lat": 12.084,
          "lng": -12.301,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Labé",
          "capital": "minor",
          "population": 5479,
          "id": 1324065197
      },
      {
          "city": "Yomou",
          "city_ascii": "Yomou",
          "lat": 7.566,
          "lng": -9.2533,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "N’Zérékoré",
          "capital": "minor",
          "population": 3614,
          "id": 1324839778
      },
      {
          "city": "Boffa",
          "city_ascii": "Boffa",
          "lat": 10.185,
          "lng": -14.043,
          "country": "Guinea",
          "iso2": "GN",
          "iso3": "GIN",
          "admin_name": "Boké",
          "capital": "minor",
          "population": 2332,
          "id": 1324801511
      }
    ];

    this.cities_lbr=[
      {
          "city": "Monrovia",
          "city_ascii": "Monrovia",
          "lat": 6.3106,
          "lng": -10.8047,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Montserrado",
          "capital": "primary",
          "population": 1021762,
          "id": 1430477826
      },
      {
          "city": "Gbarnga",
          "city_ascii": "Gbarnga",
          "lat": 7.0104,
          "lng": -9.49,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Bong",
          "capital": "admin",
          "population": 45835,
          "id": 1430269323
      },
      {
          "city": "Kakata",
          "city_ascii": "Kakata",
          "lat": 6.53,
          "lng": -10.3517,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Margibi",
          "capital": "admin",
          "population": 33945,
          "id": 1430656307
      },
      {
          "city": "Harper",
          "city_ascii": "Harper",
          "lat": 4.3754,
          "lng": -7.717,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Maryland",
          "capital": "admin",
          "population": 32661,
          "id": 1430540258
      },
      {
          "city": "Voinjama",
          "city_ascii": "Voinjama",
          "lat": 8.4167,
          "lng": -9.75,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Lofa",
          "capital": "admin",
          "population": 26594,
          "id": 1430858471
      },
      {
          "city": "Zwedru",
          "city_ascii": "Zwedru",
          "lat": 6.0704,
          "lng": -8.13,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Grand Gedeh",
          "capital": "admin",
          "population": 25678,
          "id": 1430130578
      },
      {
          "city": "Robertsport",
          "city_ascii": "Robertsport",
          "lat": 6.7533,
          "lng": -11.3686,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Grand Cape Mount",
          "capital": "admin",
          "population": 11969,
          "id": 1430885010
      },
      {
          "city": "Sanniquellie",
          "city_ascii": "Sanniquellie",
          "lat": 7.371,
          "lng": -8.685,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Nimba",
          "capital": "admin",
          "population": 11415,
          "id": 1430949102
      },
      {
          "city": "Greenville",
          "city_ascii": "Greenville",
          "lat": 5.0111,
          "lng": -9.0388,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Sinoe",
          "capital": "admin",
          "population": 10374,
          "id": 1430362799
      },
      {
          "city": "Bensonville",
          "city_ascii": "Bensonville",
          "lat": 6.4456,
          "lng": -10.6097,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Montserrado",
          "capital": "admin",
          "population": 4089,
          "id": 1430964557
      },
      {
          "city": "Barclayville",
          "city_ascii": "Barclayville",
          "lat": 4.8,
          "lng": -8.1667,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Grand Kru",
          "capital": "admin",
          "population": 2733,
          "id": 1430129873
      },
      {
          "city": "Cestos City",
          "city_ascii": "Cestos City",
          "lat": 5.4697,
          "lng": -9.5817,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "River Cess",
          "capital": "admin",
          "population": 2578,
          "id": 1430708587
      },
      {
          "city": "Buchanan",
          "city_ascii": "Buchanan",
          "lat": 5.8811,
          "lng": -10.0447,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Grand Bassa",
          "capital": "admin",
          "population": "",
          "id": 1430478203
      },
      {
          "city": "Tubmanburg",
          "city_ascii": "Tubmanburg",
          "lat": 6.8706,
          "lng": -10.8211,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Bomi",
          "capital": "admin",
          "population": "",
          "id": 1430503114
      },
      {
          "city": "Fish Town",
          "city_ascii": "Fish Town",
          "lat": 5.1974,
          "lng": -7.8758,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "River Gee",
          "capital": "admin",
          "population": "",
          "id": 1430204172
      },
      {
          "city": "Bopolu",
          "city_ascii": "Bopolu",
          "lat": 7.0667,
          "lng": -10.4875,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Gbarpolu",
          "capital": "admin",
          "population": "",
          "id": 1430414456
      },
      {
          "city": "Upper Buchanan",
          "city_ascii": "Upper Buchanan",
          "lat": 5.9161,
          "lng": -10.0525,
          "country": "Liberia",
          "iso2": "LR",
          "iso3": "LBR",
          "admin_name": "Grand Bassa",
          "capital": "",
          "population": 48315,
          "id": 1430177860
      }
    ];

    this.cities_ken=[
      {
          "city": "Nairobi",
          "city_ascii": "Nairobi",
          "lat": -1.2864,
          "lng": 36.8172,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Nairobi City",
          "capital": "primary",
          "population": 5545000,
          "id": 1404000661
      },
      {
          "city": "Meru",
          "city_ascii": "Meru",
          "lat": 0.05,
          "lng": 37.65,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Meru",
          "capital": "admin",
          "population": 1833000,
          "id": 1404588252
      },
      {
          "city": "Mombasa",
          "city_ascii": "Mombasa",
          "lat": -4.05,
          "lng": 39.6667,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Mombasa",
          "capital": "admin",
          "population": 1200000,
          "id": 1404512373
      },
      {
          "city": "Kisumu",
          "city_ascii": "Kisumu",
          "lat": -0.1,
          "lng": 34.75,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kisumu",
          "capital": "admin",
          "population": 409928,
          "id": 1404511920
      },
      {
          "city": "Nakuru",
          "city_ascii": "Nakuru",
          "lat": -0.2833,
          "lng": 36.0667,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Nakuru",
          "capital": "admin",
          "population": 307990,
          "id": 1404140179
      },
      {
          "city": "Eldoret",
          "city_ascii": "Eldoret",
          "lat": 0.5167,
          "lng": 35.2833,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Uasin Gishu",
          "capital": "admin",
          "population": 193830,
          "id": 1404676289
      },
      {
          "city": "Machakos",
          "city_ascii": "Machakos",
          "lat": -1.5167,
          "lng": 37.2667,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Machakos",
          "capital": "admin",
          "population": 114109,
          "id": 1404746781
      },
      {
          "city": "Thika",
          "city_ascii": "Thika",
          "lat": -1.0396,
          "lng": 37.09,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kiambu",
          "capital": "",
          "population": 99322,
          "id": 1404482650
      },
      {
          "city": "Nyeri",
          "city_ascii": "Nyeri",
          "lat": -0.4167,
          "lng": 36.95,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Nyeri",
          "capital": "admin",
          "population": 98908,
          "id": 1404924901
      },
      {
          "city": "Mumias",
          "city_ascii": "Mumias",
          "lat": 0.3333,
          "lng": 34.4833,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kakamega",
          "capital": "",
          "population": 99987,
          "id": 1404232773
      },
      {
          "city": "Malindi",
          "city_ascii": "Malindi",
          "lat": -3.21,
          "lng": 40.1,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kilifi",
          "capital": "",
          "population": 94016,
          "id": 1404380224
      },
      {
          "city": "Kakamega",
          "city_ascii": "Kakamega",
          "lat": 0.2833,
          "lng": 34.75,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kakamega",
          "capital": "admin",
          "population": 91778,
          "id": 1404614327
      },
      {
          "city": "Garissa",
          "city_ascii": "Garissa",
          "lat": -0.4569,
          "lng": 39.6583,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Garissa",
          "capital": "admin",
          "population": 65881,
          "id": 1404464692
      },
      {
          "city": "Kitale",
          "city_ascii": "Kitale",
          "lat": 1.0167,
          "lng": 35,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Trans Nzoia",
          "capital": "admin",
          "population": 63245,
          "id": 1404890081
      },
      {
          "city": "Bungoma",
          "city_ascii": "Bungoma",
          "lat": 0.5666,
          "lng": 34.5666,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Bungoma",
          "capital": "admin",
          "population": 55857,
          "id": 1404689847
      },
      {
          "city": "Wajir",
          "city_ascii": "Wajir",
          "lat": 1.7472,
          "lng": 40.0572,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Wajir",
          "capital": "admin",
          "population": 45771,
          "id": 1404067343
      },
      {
          "city": "Isiolo",
          "city_ascii": "Isiolo",
          "lat": 0.35,
          "lng": 37.5833,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Isiolo",
          "capital": "admin",
          "population": 45989,
          "id": 1404771203
      },
      {
          "city": "Embu",
          "city_ascii": "Embu",
          "lat": -0.5333,
          "lng": 37.45,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Embu",
          "capital": "admin",
          "population": 41092,
          "id": 1404376456
      },
      {
          "city": "Kisii",
          "city_ascii": "Kisii",
          "lat": -0.6698,
          "lng": 34.7675,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kisii",
          "capital": "admin",
          "population": 37531,
          "id": 1404617601
      },
      {
          "city": "Busia",
          "city_ascii": "Busia",
          "lat": 0.4608,
          "lng": 34.1108,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Busia",
          "capital": "admin",
          "population": 30777,
          "id": 1404250734
      },
      {
          "city": "Homa Bay",
          "city_ascii": "Homa Bay",
          "lat": -0.5167,
          "lng": 34.45,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Homa Bay",
          "capital": "admin",
          "population": 32174,
          "id": 1404321159
      },
      {
          "city": "Kericho",
          "city_ascii": "Kericho",
          "lat": -0.3692,
          "lng": 35.2839,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kericho",
          "capital": "admin",
          "population": 30023,
          "id": 1404338562
      },
      {
          "city": "Mandera",
          "city_ascii": "Mandera",
          "lat": 3.9167,
          "lng": 41.8333,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Mandera",
          "capital": "admin",
          "population": 30433,
          "id": 1404192737
      },
      {
          "city": "Kitui",
          "city_ascii": "Kitui",
          "lat": -1.3667,
          "lng": 38.0167,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kitui",
          "capital": "admin",
          "population": 29062,
          "id": 1404548296
      },
      {
          "city": "Moyale",
          "city_ascii": "Moyale",
          "lat": 3.527,
          "lng": 39.056,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Marsabit",
          "capital": "",
          "population": 24837,
          "id": 1404689643
      },
      {
          "city": "Lamu",
          "city_ascii": "Lamu",
          "lat": -2.262,
          "lng": 40.9197,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Lamu",
          "capital": "admin",
          "population": 24525,
          "id": 1404163131
      },
      {
          "city": "Maralal",
          "city_ascii": "Maralal",
          "lat": 1.1,
          "lng": 36.7,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Samburu",
          "capital": "admin",
          "population": 20841,
          "id": 1404895664
      },
      {
          "city": "Eldama Ravine",
          "city_ascii": "Eldama Ravine",
          "lat": 0.0504,
          "lng": 35.72,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Baringo",
          "capital": "",
          "population": 17581,
          "id": 1404468256
      },
      {
          "city": "Kapsabet",
          "city_ascii": "Kapsabet",
          "lat": 0.2,
          "lng": 35.1,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Nandi",
          "capital": "admin",
          "population": 17918,
          "id": 1404814363
      },
      {
          "city": "Marsabit",
          "city_ascii": "Marsabit",
          "lat": 2.3333,
          "lng": 37.9833,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Marsabit",
          "capital": "admin",
          "population": 17127,
          "id": 1404055253
      },
      {
          "city": "Lodwar",
          "city_ascii": "Lodwar",
          "lat": 3.1167,
          "lng": 35.6,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Turkana",
          "capital": "admin",
          "population": 16981,
          "id": 1404993573
      },
      {
          "city": "Namanga",
          "city_ascii": "Namanga",
          "lat": -2.55,
          "lng": 36.7833,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "",
          "capital": "",
          "population": 13193,
          "id": 1404000001
      },
      {
          "city": "Hola",
          "city_ascii": "Hola",
          "lat": -1.5,
          "lng": 40.03,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Tana River",
          "capital": "admin",
          "population": 6931,
          "id": 1404396632
      },
      {
          "city": "Kiambu",
          "city_ascii": "Kiambu",
          "lat": -1.1714,
          "lng": 36.8356,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kiambu",
          "capital": "admin",
          "population": "",
          "id": 1404390868
      },
      {
          "city": "Kabarnet",
          "city_ascii": "Kabarnet",
          "lat": 0.4919,
          "lng": 35.743,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Baringo",
          "capital": "admin",
          "population": "",
          "id": 1404620707
      },
      {
          "city": "Migori",
          "city_ascii": "Migori",
          "lat": -1.0634,
          "lng": 34.4731,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Migori",
          "capital": "admin",
          "population": "",
          "id": 1404478510
      },
      {
          "city": "Iten",
          "city_ascii": "Iten",
          "lat": 0.6703,
          "lng": 35.5081,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Elgeyo/Marakwet",
          "capital": "admin",
          "population": "",
          "id": 1404000102
      },
      {
          "city": "Kerugoya",
          "city_ascii": "Kerugoya",
          "lat": -0.4989,
          "lng": 37.2803,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kirinyaga",
          "capital": "admin",
          "population": "",
          "id": 1404597807
      },
      {
          "city": "Nyamira",
          "city_ascii": "Nyamira",
          "lat": -0.5633,
          "lng": 34.9358,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Nyamira",
          "capital": "admin",
          "population": "",
          "id": 1404000104
      },
      {
          "city": "Sotik Post",
          "city_ascii": "Sotik Post",
          "lat": -0.7813,
          "lng": 35.3416,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Bomet",
          "capital": "admin",
          "population": "",
          "id": 1404087664
      },
      {
          "city": "Murang’a",
          "city_ascii": "Murang'a",
          "lat": -0.721,
          "lng": 37.1526,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Murang’a",
          "capital": "admin",
          "population": "",
          "id": 1404066738
      },
      {
          "city": "Siaya",
          "city_ascii": "Siaya",
          "lat": 0.0607,
          "lng": 34.2881,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Siaya",
          "capital": "admin",
          "population": "",
          "id": 1404162576
      },
      {
          "city": "Kapenguria",
          "city_ascii": "Kapenguria",
          "lat": 1.2389,
          "lng": 35.1119,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "West Pokot",
          "capital": "admin",
          "population": "",
          "id": 1404228137
      },
      {
          "city": "Mwatate",
          "city_ascii": "Mwatate",
          "lat": -3.505,
          "lng": 38.3772,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Taita/Taveta",
          "capital": "admin",
          "population": "",
          "id": 1404648092
      },
      {
          "city": "Wote",
          "city_ascii": "Wote",
          "lat": -1.7808,
          "lng": 37.6288,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Makueni",
          "capital": "admin",
          "population": "",
          "id": 1404304549
      },
      {
          "city": "Kajiado",
          "city_ascii": "Kajiado",
          "lat": -1.85,
          "lng": 36.7833,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kajiado",
          "capital": "admin",
          "population": "",
          "id": 1404265412
      },
      {
          "city": "Narok",
          "city_ascii": "Narok",
          "lat": -1.0833,
          "lng": 35.8667,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Narok",
          "capital": "admin",
          "population": "",
          "id": 1404459814
      },
      {
          "city": "Ol Kalou",
          "city_ascii": "Ol Kalou",
          "lat": -0.2643,
          "lng": 36.3788,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Nyandarua",
          "capital": "admin",
          "population": "",
          "id": 1404930645
      },
      {
          "city": "Kwale",
          "city_ascii": "Kwale",
          "lat": -4.1737,
          "lng": 39.4521,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kwale",
          "capital": "admin",
          "population": "",
          "id": 1404769042
      },
      {
          "city": "Rumuruti",
          "city_ascii": "Rumuruti",
          "lat": 0.2725,
          "lng": 36.5381,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Laikipia",
          "capital": "admin",
          "population": "",
          "id": 1404005234
      },
      {
          "city": "Kendu Bay",
          "city_ascii": "Kendu Bay",
          "lat": -0.3596,
          "lng": 34.64,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Homa Bay",
          "capital": "",
          "population": 91248,
          "id": 1404600696
      },
      {
          "city": "Athi River",
          "city_ascii": "Athi River",
          "lat": -1.45,
          "lng": 36.9833,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Machakos",
          "capital": "",
          "population": 81302,
          "id": 1404232217
      },
      {
          "city": "Kilifi",
          "city_ascii": "Kilifi",
          "lat": -3.6333,
          "lng": 39.85,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kilifi",
          "capital": "",
          "population": 80339,
          "id": 1404002930
      },
      {
          "city": "Sotik",
          "city_ascii": "Sotik",
          "lat": -0.6796,
          "lng": 35.12,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Bomet",
          "capital": "",
          "population": 71285,
          "id": 1404807525
      },
      {
          "city": "Voi",
          "city_ascii": "Voi",
          "lat": -3.3696,
          "lng": 38.57,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Taita/Taveta",
          "capital": "",
          "population": 36487,
          "id": 1404504656
      },
      {
          "city": "Nanyuki",
          "city_ascii": "Nanyuki",
          "lat": 0.0167,
          "lng": 37.0667,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Laikipia",
          "capital": "",
          "population": 31577,
          "id": 1404481993
      },
      {
          "city": "Naivasha",
          "city_ascii": "Naivasha",
          "lat": -0.7167,
          "lng": 36.4333,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Nakuru",
          "capital": "",
          "population": 14563,
          "id": 1404904927
      },
      {
          "city": "Mwingi",
          "city_ascii": "Mwingi",
          "lat": -0.9296,
          "lng": 38.07,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Kitui",
          "capital": "",
          "population": 11219,
          "id": 1404312666
      },
      {
          "city": "Dadaab",
          "city_ascii": "Dadaab",
          "lat": 0.0531,
          "lng": 40.3086,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Garissa",
          "capital": "",
          "population": 5723,
          "id": 1404002655
      },
      {
          "city": "Karungu",
          "city_ascii": "Karungu",
          "lat": -0.8496,
          "lng": 34.15,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Migori",
          "capital": "",
          "population": 2376,
          "id": 1404796412
      },
      {
          "city": "Witu",
          "city_ascii": "Witu",
          "lat": -2.3796,
          "lng": 40.43,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Lamu",
          "capital": "",
          "population": 5380,
          "id": 1404037095
      },
      {
          "city": "Konza",
          "city_ascii": "Konza",
          "lat": -1.7496,
          "lng": 37.12,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Machakos",
          "capital": "",
          "population": 2004,
          "id": 1404143289
      },
      {
          "city": "Tsavo",
          "city_ascii": "Tsavo",
          "lat": -2.9828,
          "lng": 38.4666,
          "country": "Kenya",
          "iso2": "KE",
          "iso3": "KEN",
          "admin_name": "Taita/Taveta",
          "capital": "",
          "population": 414,
          "id": 1404321644
      }
  ];
     }

  ngOnInit() {
        this.idPaySelect = 'CM';
        // this.chooseCountryLocal('CM');

        this.authService.isAuthenticated().then(
          (dec) => {
            if(dec) {
              this.userService.getCurrentUtilisateur().then(
                (data) => {
                  // console.log(data);
                  this.currentUser = data;
                  if(data.idCountry) {
                    this.idPaySelect = data.idCountry;
                    this.chooseCountryLocal(this.idPaySelect);
                  }
                  // this.reload();
                }
              );
            }
          }
        );
  }

  chooseCountryLocal(idPays) {
    // console.log(idPays);
    const pointe = this;
    this.Contries.forEach((pays)=> {
      if(pays.alpha2Code === idPays) {
        this.paySelect = pays;
        this.getCitiesByCountriesIso2(idPays);
        localStorage.setItem("cities",JSON.stringify(this.cities));
        // console.log(this.cities);
        // console.log(pointe.cities);
        // this.reload();
      //  if(this.paySelect!==null)
      }
    });
  }

  closePopOver() {
    document.getElementById('modalPopOver').classList.add('hidden');
  }

  printPop() {
    document.getElementById('modalPopOver').classList.remove('hidden');
  }


  reload(): void
  {
    reload();
  }
   getCitiesByCountriesIso2(iso2: string)
  {
    // if(iso2==='BJ') return this.cities_ben;
    // if(iso2==='CI') return this.cities_civ;
    // if(iso2==='CM') return this.cities_cmr;
    // if(iso2==='GA') return this.cities_gab;
    // if(iso2==='GH') return this.cities_gha;
    // if(iso2==='GN') return this.cities_gin;
    // if(iso2==='LR') return this.cities_lbr;
    // if(iso2==='KE') return this.cities_ken;
    const pointe = this;
    // console.log(iso2+"  "+iso2);
    pointe.cities=[];
   this.cityService.getCitiesCountry(iso2).then(
        (value)=>{
            value.forEach((doc) =>{
              pointe.cities.push(doc);
              });
        }
    ).catch(
        (err)=>
        {
            // console.log(err);

        }
    );
  }

  saveCountry(paysChoice: any) {
    localStorage.setItem('paysSelect', paysChoice.alpha2Code);
    this.isLoading = true;
    if(this.idPaySelect !== paysChoice.alpha2Code) {
      const tmpUser = this.currentUser;
      tmpUser.idCountry = paysChoice.alpha2Code;
      this.userService.updateCurrentUser(tmpUser).then(
        () => {
          this.paySelect = paysChoice;
          this.idPaySelect = paysChoice.alpha2Code;
          this.isLoading = false;
          this.reload();
        }
      );
    }
  }
}
