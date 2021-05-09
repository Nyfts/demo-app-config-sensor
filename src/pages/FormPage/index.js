import React, { useRef } from "react";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";

import "./index.css";

import TextInput from "../../components/TextInput";
import Section from "../../components/Section";
import SubSection from "../../components/SubSection";

function FormPage() {
  const formRef = useRef();
  const history = useHistory();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Section title="Equipamento">
        <TextInput name="area" label="Area" />
        <TextInput name="setor" label="Setor" />
        <TextInput name="conjunto" label="Conjunto" />
        <TextInput name="equipamento" label="Equipamento" />
        <TextInput name="tag" label="Tag" />
      </Section>

      <Section title="SUBCONJUNTO - ACIONAMENTO">
        <div>radio buttons mancais tipos motor</div>
        <TextInput name="acionamento.descricao" label="Descrição" required />
        <TextInput name="acionamento.tag" label="TAG" required />
        <TextInput name="acionamento.fabricante" label="Fabricante" required />
        <TextInput name="acionamento.carcaca" label="Carcaça" />

        <SubSection title="Potência" row>
          <TextInput name="acionamento.cv" label="CV" required />
          <TextInput name="acionamento.kw" label="Kw" required />
          <TextInput name="acionamento.rpm" label="RPM" required />
          <TextInput name="acionamento.tensao" label="Tensão (V)" required />
          <TextInput name="acionamento.corrente" label="Corrente (I)" required />
          <TextInput name="acionamento.frequencia" label="Frequência (Hz)" required />
          <TextInput name="acionamento.classeIsolacao" label="Classe de Isolação" />
          <TextInput name="acionamento.grauProtecao" label="Grau de Proteção" />
          <TextInput name="acionamento.rendimento" label="Rendimento (%)" />
          <TextInput name="acionamento.fatorServico" label="Fator de Serviço" />
          <TextInput
            name="acionamento.fatorPotencia"
            label="Fator de Potência"
          />
          <TextInput name="acionamento.categoria" label="Categoria" />
        </SubSection>

        <SubSection title="Mancais do Motor" row>
          <div>radio buttons mancais</div>
          <TextInput name="acionamento.LA" label="LA" />
          <TextInput name="acionamento.LOA" label="LOA" />
        </SubSection>

        <SubSection title="Lubrificação">
          <div>radio buttons Mancal LA</div>
          <div>radio buttons Mancal LOA</div>
        </SubSection>

        <SubSection title="Acionamento de Partida Elétrica">
          <div>radio buttons acionamento partida elétrica</div>
        </SubSection>

        <SubSection title="Fixação do Motor">
          <div>radio buttons Fixação do Motor</div>
        </SubSection>
      </Section>

      <Section title="SUBCONJUNTO - TRANSMISSÃO">
        <div>radio buttons acoplamento</div>
        <div>radio buttons eixo cardan</div>
        <div>radio buttons Potias / Correias</div>
        <div>radio buttons Coroa / Corrente</div>

        <SubSection title="Redutor">
          <TextInput name="transmissao.descricao" label="Descrição" required />
          <TextInput name="transmissao.tag" label="TAG" required />
          <TextInput name="transmissao.marca" label="Marca" />
          <TextInput name="transmissao.modelo" label="Modelo" />
          <TextInput name="transmissao.numeroSerie" label="Número de Série" />
          <TextInput name="transmissao.relacao" label="Relação" required />
          <TextInput name="transmissao.numeroEixos" label="Nº de Eixos" required />
          <div>radio buttons redutor</div>
          <div>radio buttons entrada</div>
          <div>radio buttons intermediário 1</div>
          <div>radio buttons intermediário 2</div>
          <div>radio buttons intermediário 3</div>
          <div>radio buttons intermediário 4</div>
          <div>radio buttons saída</div>
        </SubSection>
      </Section>

      <Section title="SUBCONJUNTO - CARGA">
        <SubSection title="Bomba">
          <TextInput name="carga.bomba.descricao" label="Descrição" required />
          <TextInput name="carga.bomba.tag" label="TAG" required />
          <TextInput name="carga.bomba.marca" label="Marca" required />
          <TextInput name="carga.bomba.modelo" label="Modelo" required />
          <div>radio buttons tipo</div>
          <div>radio buttons estagio</div>
          <div>radio buttons lubrificação</div>
        </SubSection>

        <SubSection title="Ventilador / Exautos">
          <TextInput name="carga.ventilador.descricao" label="Descrição" required />
          <TextInput name="carga.ventilador.tag" label="TAG" required />
          <TextInput name="carga.ventilador.marca" label="Marca" />
          <TextInput name="carga.ventilador.modelo" label="Modelo" />
          <TextInput name="carga.ventilador.rotor" label="0 do Rotor" />
          <TextInput name="carga.ventilador.numPas" label="Número de Pás" />
          <div>radio buttons tipo</div>
          <div>radio buttons lubrificação</div>
        </SubSection>

        <SubSection title="Compressor">
          <TextInput name="carga.compressor.descricao" label="Descrição" required />
          <TextInput name="carga.compressor.tag" label="TAG" required />
          <TextInput name="carga.compressor.marca" label="Marca" required />
          <TextInput name="carga.compressor.modelo" label="Modelo" required />
          <div>radio buttons carga</div>
          <div>radio buttons tipo</div>
        </SubSection>
      </Section>

      <div className="submit-button-wrapper">
        <button className="submit-button return-button" onClick={handleReturn} type="reset">
          Voltar
        </button>
        <button className="submit-button" type="submit">
          Salvar
        </button>
      </div>
    </Form>
  );
}

export default FormPage;
