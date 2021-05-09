import React from "react";

import "./index.css";

function Section({ children, title }) {
  return (
    <fieldset className="section-wrapper">
      <legend className="section-title">{title}</legend>
      {children}
    </fieldset>
  );
}

export default Section;
