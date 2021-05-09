import React, { useRef } from "react";
import { Form } from "@unform/web";

import "./index.css";

import TextInput from "../../components/TextInput";
import Section from "../../components/Section";
import SubSection from "../../components/SubSection";

function FormPage() {
  const formRef = useRef();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const handleReturn = () => {
    console.log("return");
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Section title="PROCESSO">
          <TextInput name="area" label="Nome" />
          <TextInput name="setor" label="Setor" />
          <TextInput name="conjunto" label="Conjunto" />
          <TextInput name="equipamento" label="Equipamento" />
          <TextInput name="tag" label="Tag" />
        </Section>

        <Section title="SUBCONJUNTO - ACIONAMENTO">
          <TextInput name="descricao" label="Nome" />
          <TextInput name="tag" label="Tag" />
          <TextInput name="motorInducao" label="Motor de Indução" />
          <TextInput name="motorSincrono" label="Motor Síncrono" />
          <TextInput name="geradorEnergia" label="Gerador de Energia" />
          <TextInput name="servoMotor" label="Servo Motor" />
        </Section>

        <Section title="ACIONAMENTOS - PARTIDAS">
          <TextInput name="acionamentoInversorFrequencia" label="Acionamento Inversor Frequência" />
          <TextInput name="comandoEletromagnético" label="Comando Eletromagnético" />
          <TextInput name="acionamentoSoftstarter" label="Acionamento Softstarter" />
          <TextInput name="fabricante" label="Fabricante" />
          <TextInput name="carcaca" label="Carcaça" />

          <SubSection title="Potência">
            <TextInput name="potencia.cv" label="CV" />
            <TextInput name="potencia.kw" label="Kw" />
            <TextInput name="potencia.rpmFabricante" label="RPM fabricante" />
            <TextInput name="potencia.rpm1" label="RPM 1 ou %" />
            <TextInput name="potencia.rpm2" label="RPM 2 ou %" />
            <TextInput name="potencia.rpm3" label="RPM 3 ou %" />
            <TextInput name="potencia.rpm4" label="RPM 4 ou %" />
            <TextInput name="potencia.rpm5" label="RPM 5 ou %" />
            <TextInput name="potencia.rpm6" label="RPM 6 ou %" />
          </SubSection>
        </Section>

      <div className="submit-button-wrapper">
        <button
          className="submit-button return-button"
          onClick={handleReturn}
          type="reset"
        >
          Voltar
        </button>
        <button className="submit-button" type="submit">
          Enviar
        </button>
      </div>
    </Form>
  );
}

export default FormPage;
