import React, { useRef } from "react";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";

import "./index.css";

import TextInput from "../../components/TextInput";
import RadioInput from "../../components/RadioInput";
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
        <RadioInput name="acionamento.tipos" label="Tipos Motor" row required options={
          [
            { id: "motoIndução", value: "motoIndução", label: "Motor de indução" },
            { id: "motorSincrono", value: "motorSincrono", label: "Motor Síncrono" },
            { id: "geradorEnergia", value: "geradorEnergia", label: "Gerador de Energia" },
            { id: "servoMotor", value: "servoMotor", label: "Servo Motor" },
          ]
        }/>
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
          <TextInput name="acionamento.fatorPotencia" label="Fator de Potência"
          />
          <TextInput name="acionamento.categoria" label="Categoria" />
        </SubSection>

        <SubSection title="Mancais do Motor" row>
          <RadioInput name="acionamento.mancais" label="Mancais" options={
          [
            { id: "deslizeCasquilho", value: "deslizeCasquilho", label: "Deslize / Casquilho" },
            { id: "rolamento", value: "rolamento", label: "Rolamento" }
          ]
        }/>
          <TextInput name="acionamento.LA" label="LA" />
          <TextInput name="acionamento.LOA" label="LOA" />
        </SubSection>

        <SubSection title="Lubrificação">
          <SubSection title="Mancal LA" row >
            <RadioInput name="acionamento.mancalLa.tipo" label="Tipos Motor" options={
              [
                { id: "graxa", value: "graxa", label: "Graxa" },
                { id: "oleo", value: "oleo", label: "Óleo" },
              ]
            }/>
            <RadioInput name="acionamento.mancalLa.Sistema" label="Tipos Motor" row options={
              [
                { id: "sistemaManual", value: "sistemaManual", label: "Sistema manual" },
                { id: "sistemaAutomatico", value: "sistemaAutomatico", label: "Sistema automático" },
                { id: "fluxoGravidade", value: "fluxoGravidade", label: "Fluxo por gravidade" },
                { id: "fluxoForcado", value: "fluxoForcado", label: "Fluxo forçado" },
              ]
            }/>
          </SubSection>
          <SubSection title="Mancal LOA" row >
            <RadioInput name="acionamento.mancalLa.tipo" label="Tipos Motor" options={
              [
                { id: "graxa2", value: "graxa", label: "Graxa" },
                { id: "oleo2", value: "oleo", label: "Óleo" },
              ]
            }/>
            <RadioInput name="acionamento.mancalLa.Sistema" label="Tipos Motor" row options={
              [
                { id: "sistemaManual2", value: "sistemaManual", label: "Sistema manual" },
                { id: "sistemaAutomatico2", value: "sistemaAutomatico", label: "Sistema automático" },
                { id: "fluxoGravidade2", value: "fluxoGravidade", label: "Fluxo por gravidade" },
                { id: "fluxoForcado2", value: "fluxoForcado", label: "Fluxo forçado" },
              ]
            }/>
          </SubSection>
        </SubSection>

        <RadioInput name="acionamento.partidaEletrica" label="Acionamento de Partida Elétrica" required options={
          [
            { id: "comandoEletromecanico", value: "comandoEletromecanico", label: "Comando Eletromecânico" },
            { id: "softStarter", value: "softStarter", label: "Soft - Starter" },
            { id: "inversorFrequencia", value: "inversorFrequencia", label: "Inversor de Frequência" },
          ]
        }/>

        <RadioInput name="acionamento.fixacaoMotor" label="Fixação do Motor" row required options={
          [
            { id: "flangeadoCargaAcionada", value: "flangeadoCargaAcionada", label: "Flangeado à carga acionada" },
            { id: "flangeadoCargaAcionadaHorizontal", value: "flangeadoCargaAcionadaHorizontal", label: "Flangeado à carga acionada horizontal" },
            { id: "fixadoBaseMetalica", value: "fixadoBaseMetalica", label: "Fixado em base metálica" },
            { id: "fixadoDiretoPiso", value: "fixadoDiretoPiso", label: "Fixado direto ao piso" },
            { id: "fixadoCoxins", value: "fixadoCoxins", label: "Fixado sob coxins" },
            { id: "fixadoMoias", value: "fixadoMoias", label: "Fixado sob moias" },
          ]
        }/>
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

          <SubSection title="Entrada" row >
            <TextInput name="transmissao.entrada.rpm" label="RPM" />
            <TextInput name="transmissao.entrada.rolLA" label="Rol. LA" />
            <TextInput name="transmissao.entrada.rolLOA" label="Rol. LOA" />
            <TextInput name="transmissao.entrada.zPinhao" label="Z Pinhão" />
            <TextInput name="transmissao.entrada.zCoroa" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 1" row >
            <TextInput name="transmissao.intermediario1.rolLA" label="Rol. LA" />
            <TextInput name="transmissao.intermediario1.rolLOA" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario1.zPinhao" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario1.zCoroa" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 2" row >
            <TextInput name="transmissao.intermediario2.rolLA" label="Rol. LA" />
            <TextInput name="transmissao.intermediario2.rolLOA" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario2.zPinhao" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario2.zCoroa" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 3" row >
            <TextInput name="transmissao.intermediario3.rolLA" label="Rol. LA" />
            <TextInput name="transmissao.intermediario3.rolLOA" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario3.zPinhao" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario3.zCoroa" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 4" row >
            <TextInput name="transmissao.intermediario4.rolLA" label="Rol. LA" />
            <TextInput name="transmissao.intermediario4.rolLOA" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario4.zPinhao" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario4.zCoroa" label="Z Coroa" />
          </SubSection>

          <SubSection title="Saída" row >
            <TextInput name="transmissao.saida.rpm" label="RPM" />
            <TextInput name="transmissao.saida.rolLA" label="Rol. LA" />
            <TextInput name="transmissao.saida.rolLOA" label="Rol. LOA" />
            <TextInput name="transmissao.saida.zPinhao" label="Z Pinhão" />
            <TextInput name="transmissao.saida.zCoroa" label="Z Coroa" />
          </SubSection>

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
