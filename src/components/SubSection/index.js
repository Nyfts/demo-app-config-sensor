import React from "react";

import "./index.css";

function SubSection({ children, title }) {
  return (
    <fieldset className="sub-section-wrapper">
      <legend className="sub-section-title">{title}</legend>
      {children}
    </fieldset>
  );
}

export default SubSection;
