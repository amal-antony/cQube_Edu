// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:3000/api',
  config: "national",
  stateCode: "HR",
  secretKey: 'VSK_EKSTEP',
  loginObj: {
    title: "State Vidya Samiksha Kendra",
    imageURL:"back_image.jpg",
    tagLine: "Shared seeing for coordinated action towards achieving outcomes and goals",
    logoURL: "cQube_logo.jpg"
  },
  numberFormat: {
    reports: {
      locale: 'en-IN',
      format: 'long'
    },
    keyMetrics: {
      locale: 'en-IN',
      format: 'long'
    },
    vanityMetrics: {
      locale: 'en-IN',
      format: 'long'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.