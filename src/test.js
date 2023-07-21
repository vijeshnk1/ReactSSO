import * as microsoftTeams from "@microsoft/teams-js";
export function initialize() {
  microsoftTeams.app.initialize((res) => {
    console.log("MICROSOFT INITIALIZED", res);
  });
}

export function ssoDemo() {
  return new Promise((resolve, reject) => {
    console.log("1. Get auth token from Microsoft Teams");
    microsoftTeams.authentication.authenticate({
      successCallback: (result) => {
        console.log("TOKEN SSO", result);
      },
      failureCallback: (err) => console.log("Error", err),
    });
  });
}
