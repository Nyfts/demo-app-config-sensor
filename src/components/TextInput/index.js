import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import './index.css';

export default function InputText({ name, isLogin, icon, label, required, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      
      setValue(ref, value) {
        // ref.setInputValue(value);
        ref.value = value;
      },
      clearValue(ref) {
        ref.value = "";
      },

    });
  }, [fieldName, registerField]);

  return (
    <div className="text-input-wrapper">
      <span className="text-input-label">{label} <span className="text-input-required">{required && "*"}</span></span>
      <div className="text-input-container">
        <input className="text-input"ref={inputRef} defaultValue={defaultValue} {...rest} />
      </div>
    </div>
  );
}
