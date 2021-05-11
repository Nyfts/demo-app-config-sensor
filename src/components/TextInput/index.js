import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import "./index.css";

export default function InputText({
  name,
  isLogin,
  icon,
  label,
  required,
  ...rest
}) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      getValue(ref) {
        if (ref.type === "number") {
          return parseFloat(ref.value) || 0;
        } else {
          return ref.value;
        }
      },
      setValue(ref, value) {
        if (ref.type === "number") {
          ref.value = parseFloat(value) || 0;
        } else {
          ref.value = value;
        }
      },
      clearValue(ref) {
        ref.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className="text-input-wrapper">
      <p className="text-input-label">
        {label} <span className="text-input-required">{required && "*"}</span>
      </p>
      <div className="text-input-container">
        <input
          className="text-input"
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      </div>
    </div>
  );
}
