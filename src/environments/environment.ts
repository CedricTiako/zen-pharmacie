// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Zen Pharmacy',
  numberVersion: 0,
  version: '26.01.23-12.58',
  yearVersion: '2023',
  apiCors: 'https://cors-anywhere-zen.onrender.com',
  firebaseConfig: {
    apiKey: "AIzaSyAM4Nk7u-BE-PTEfYEjhDJSaRsozZ_nKDU",
    authDomain: "zen-pharmacie.firebaseapp.com",
    projectId: "zen-pharmacie",
    storageBucket: "zen-pharmacie.appspot.com",
    messagingSenderId: "9681702653",
    appId: "1:9681702653:web:0b65bb01614d6dd658f894"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
