// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  menuApi_url: "https://edeaf-api-staging.azurewebsites.net",
  auth: {
    api_url: "https://edeaf-api-staging.azurewebsites.net/connect/token",
    
    client_id:"web-dashboard",
    client_secret:"SuperSecretPassword",
    scope: "openid profile role email offline_access adminApi mobileApi",
    grant_type: "password"

  },

};

export const api_url = "https://edeaf-api-staging.azurewebsites.net/connect/token";

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
