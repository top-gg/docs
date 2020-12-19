import React from "react";
import { ReactComponent as Topgg } from "../assets/logo.svg";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Topgg />
      <p style={{ margin: "0 0 0 15px" }} className="site-title">
        Top.gg Documentation
      </p>
    </div>
  );
}

export default Logo;
