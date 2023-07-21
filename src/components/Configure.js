import React, { useEffect } from "react";
import * as microsoftTeams from "@microsoft/teams-js";

function Configure() {
  console.log("First render");
  useEffect(() => {
    console.log("Inside useeffect");
    microsoftTeams.app.initialize((res) => {
      console.log("MICROSOFT INITIALIZED", res);
      microsoftTeams.pages.config.registerOnSaveHandler(function(saveEvent) {
        var tabUrl =
          window.location.protocol + "//" + window.location.host + "/ssoDemo";
        microsoftTeams.pages.config.setConfig({
          contentUrl: tabUrl,
          entityId: tabUrl,
        });
        saveEvent.notifySuccess();
      });
      microsoftTeams.pages.config.setValidityState(true);
    });
  }, []);
  return <div>This is testing configure route</div>;
}

export default Configure;
