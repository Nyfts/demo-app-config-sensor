import React, { useRef } from "react";
import { Form } from "@unform/web";

import "./index.css";

import TextInput from "../../components/TextInput";

function FormPage() {
  const formRef = useRef();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const handleReturn = () => {
    console.log('return');
  }

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <TextInput name="username" label="Username" />
      <TextInput name="password" label="password" />
      <div className="submit-button-wrapper">
        <button className="submit-button return-button">Voltar</button>
        <button className="submit-button" type="submit">
          Enviar
        </button>
      </div>
    </Form>
  );
}

export default FormPage;
