import React, { useEffect } from "react";
import { initialize, ssoDemo } from "../test";

function SSODemo() {
  useEffect(() => {
    initialize();
    ssoDemo();
  }, []);
  return <div>This is testing sso route</div>;
}

export default SSODemo;
