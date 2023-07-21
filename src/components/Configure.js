import React, { useEffect } from "react";
import { initialize } from "../test";
import * as microsoftTeams from "@microsoft/teams-js";

function Configure() {
  useEffect(() => {
    initialize();

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
  }, []);
  return <div>This is testing configure route</div>;
}

export default Configure;
