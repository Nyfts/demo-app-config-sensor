import React, { useEffect, useRef } from "react";
import ReactInputMask from 'react-input-mask';
import { useField } from "@unform/core";

import './index.css';

export default function InputText({ name, isLogin, icon, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const mystyle = {
    flex: 1,
    borderLeft: "none",
    borderRadius: 0,
    fontSize: "14px",
    padding: "10px",
    border: '1px solid #b0b0b0',
    borderRadius: '5px'
  };

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
      <span className="text-input-label">{label}</span>
      <div className="text-input-container">
        <ReactInputMask maskPlaceholder={null} className="masked-text-input" style={mystyle} ref={inputRef} defaultValue={defaultValue} {...rest} />
      </div>
    </div>
  );
}
