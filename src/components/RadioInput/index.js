import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import "./index.css";

function RadioInput({ name, label, options, required, row, image, ...rest }) {
  const inputRefs = useRef([])
  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: refs => {
        return refs.current.find(input => input?.checked)?.value || '';
      },
      setValue: (refs, id) => {
        const inputRef = refs.current.find(ref => ref.id === id)
        if (inputRef) inputRef.checked = true
      },
      clearValue: refs => {
        const inputRef = refs.current.find(ref => ref.checked === true)
        if (inputRef) inputRef.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <div className="radio-input-wrapper">
      <p className="radio-input-label">{label} <span className="radio-input-required">{required && "*"}</span></p>

      <div className={row ? "radio-options-wrapper radio-options-wrapper-row" : "radio-options-wrapper"}>
        {options.map((option, index) => (
          <span key={option.id} className="radio-option">
            <input
              className="radio-input"
              type="radio"
              ref={ref => {
                inputRefs.current[index] = ref
              }}
              id={option.id}
              name={name}
              defaultChecked={defaultValue.includes(option.id)}
              value={option.value}
              {...rest}
            />

            <label htmlFor={option.id} key={option.id} className="radio-input-text">
              {option.label}
            </label>

          </span>
        ))}
      </div>

      {error && <span>{error}</span>}
    </div>
  )
}

export default RadioInput;