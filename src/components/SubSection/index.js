import React from "react";

import "./index.css";

function SubSection({ children, title, row }) {
  return (
    <fieldset className={row ? "sub-section-wrapper sub-section-wrapper-row" : "sub-section-wrapper"}>
      <legend className="sub-section-title">{title}</legend>
      {children}
    </fieldset>
  );
}

export default SubSection;
