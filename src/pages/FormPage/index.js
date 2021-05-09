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
        <SubSection title="Acoplamento">
          <RadioInput name="transmissao.acoplamento" label="Acoplamento" row required options={
            [
              { id: "rigidoFixacaoParafuso", value: "rigidoFixacaoParafuso", label: "Rígido fixação por parafuso" },
              { id: "elasticoFlexivel", value: "elasticoFlexivel", label: "Elástico Flexível" },
              { id: "engrenagemGrade", value: "engrenagemGrade", label: "Engrenagem com grade" },
              { id: "dentesArqueadoLuva", value: "dentesArqueadoLuva", label: "Dentes arqueado c/ luva" },
              { id: "elasticoPinos", value: "elasticoPinos", label: "Elástico de pinos" },
              { id: "elasticoGarras", value: "elasticoGarras", label: "Elástico de garras" },
              { id: "hidraulico", value: "hidraulico", label: "Hidráulico" },
              { id: "outrosTipos", value: "outrosTipos", label: "Outro(s) tipo(s) não contemplado nesta FCE" },
            ]
          }/>
          <TextInput name="transmissao.marca" label="Marca" required />
          <TextInput name="transmissao.modelo" label="Modelo" required />
        </SubSection>

        <SubSection title="Eixo Cardan">
          <RadioInput name="transmissao.acoplamento" label="Acoplamento" row required options={
            [
              { id: "acionamentoAngulo", value: "acionamentoAngulo", label: "Acionamento em ângulo" },
              { id: "acionamentoReto", value: "acionamentoReto", label: "Acionamento reto" },
              { id: "eixoEspacador", value: "eixoEspacador", label: "Eixo espaçador" },
            ]
          }/>
        </SubSection>
        
        <SubSection title="Potias / Correias" row>
          <RadioInput name="transmissao.tipoPolia" row required options={
            [
              { id: "tipoPolia1", value: "tipoPolia1", label: "Tipo polia 1" },
              { id: "tipoPolia2", value: "tipoPolia2", label: "Tipo polia 2" },
            ]
          }/>
          <TextInput name="transmissao.motriz" label="Motriz (d1)" required />
          <TextInput name="transmissao.movida" label="Movida (d2)" required />
          <TextInput name="transmissao.relacao" label="Relação" required />
          <TextInput name="transmissao.entreEixos" label="Entre Eixos (L)" required />
          <TextInput name="transmissao.numCorreias" label="Nº de Correias" required />
        </SubSection>
        
        <SubSection title="Coroa / Corrente" row>
          <RadioInput name="transmissao.tipoPolia" row required options={
            [
              { id: "tipoCoroa1", value: "tipoCoroa1", label: "Tipo coroa 1" },
              { id: "tipoCoroa2", value: "tipoCoroa2", label: "Tipo coroa 2" },
            ]
          }/>
          <TextInput name="transmissao.dentesMatriz" label="Dentes da Engrenagem Matriz (Z1)" required />
          <TextInput name="transmissao.dentesMotora" label="Dentes da Engrenagem Motora (Z2)" required />
          <TextInput name="transmissao.relacao2" label="Relação" required />
          <TextInput name="transmissao.entreEixos2" label="Entre Eixos (L)" required />
        </SubSection>

        <SubSection title="Redutor">
          <TextInput name="transmissao.descricao" label="Descrição" required />
          <TextInput name="transmissao.tag" label="TAG" required />
          <TextInput name="transmissao.marca" label="Marca" />
          <TextInput name="transmissao.modelo" label="Modelo" />
          <TextInput name="transmissao.numeroSerie" label="Número de Série" />
          <TextInput name="transmissao.relacao" label="Relação" required />
          <TextInput name="transmissao.numeroEixos" label="Nº de Eixos" required />
          
          
          <RadioInput name="transmissao.TipoRedutor" row label="Tipo Redutor" options={
            [
              { id: "redutorParalelo", value: "redutorParalelo", label: "Redutor Paralelo" },
              { id: "redutorHelicoidal", value: "redutorHelicoidal", label: "Redutor Helicoidal" },
              { id: "redutorCicloidal", value: "redutorCicloidal", label: "Redutor Cicloidal" },
              { id: "redutorPlanetario", value: "redutorPlanetario", label: "Redutor Planetário" },
              { id: "eixoSemFim", value: "eixoSemFim", label: "Eixo Sem - Fim" },
              { id: "outroTipoRedutor", value: "outroTipoRedutor", label: "Outro" },
            ]
          }/>

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
          
          <RadioInput name="carga.tipo" row label="Tipo" options={
            [
              { id: "engrenagens", value: "engrenagens", label: "Engrenagens" },
              { id: "lobulos", value: "lobulos", label: "Lóbulos" },
              { id: "parafusos", value: "parafusos", label: "Parafusos" },
              { id: "rotorPaletas", value: "rotorPaletas", label: "Rotor / Paletas" },
              { id: "eixosExcentrico", value: "eixosExcentrico", label: "Eixo Excêntrico" },
              { id: "pistao", value: "pistao", label: "Pistão" },
            ]
          }/>

          <RadioInput name="carga.bomba.estagio" row label="Lubrificação" options={
            [
              { id: "simplesEstagio", value: "simplesEstagio", label: "Simples Estágio" },
              { id: "multiplosEstagio", value: "multiplosEstagio", label: "Múltiplos Estágio" },
            ]
          }/>

          <SubSection title="Lubrificação" row >
            <RadioInput name="carga.bomba.lubrificacao" options={
              [
                { id: "oleo", value: "oleo", label: "Óleo" },
                { id: "graxa", value: "graxa", label: "Graxa" },
              ]
            }/>
            <RadioInput name="carga.bomba.lubrificacaoTipo" options={
                [
                  { id: "comPinoGraxeiro", value: "comPinoGraxeiro", label: "Com pino graxeiro" },
                  { id: "semPinoGraxeiro", value: "semPinoGraxeiro", label: "Sem pino graxeiro" },
                ]
            }/>
          </SubSection>

        </SubSection>

        <SubSection title="Ventilador / Exautos">
          <TextInput name="carga.ventilador.descricao" label="Descrição" required />
          <TextInput name="carga.ventilador.tag" label="TAG" required />
          <TextInput name="carga.ventilador.marca" label="Marca" />
          <TextInput name="carga.ventilador.modelo" label="Modelo" />
          <TextInput name="carga.ventilador.rotor" label="0 do Rotor" />
          <TextInput name="carga.ventilador.numPas" label="Número de Pás" />
          
          <RadioInput name="carga.ventilador.lubrificacao" row options={
            [
              { id: "noBalanco", value: "noBalanco", label: "Em Balanço" },
              { id: "entreMancais", value: "entreMancais", label: "Entre Mancais" },
              { id: "noEixoMotriz", value: "noEixoMotriz", label: "No eixo motriz" },
            ]
          }/>
          
          <SubSection title="Lubrificação" row >
            <RadioInput name="carga.ventilador.lubrificacao" options={
              [
                { id: "oleo", value: "oleo", label: "Óleo" },
                { id: "graxa", value: "graxa", label: "Graxa" },
              ]
            }/>
            <RadioInput name="carga.ventilador.lubrificacaoTipo" options={
                [
                  { id: "comPinoGraxeiro", value: "comPinoGraxeiro", label: "Com pino graxeiro" },
                  { id: "semPinoGraxeiro", value: "semPinoGraxeiro", label: "Sem pino graxeiro" },
                ]
            }/>
          </SubSection>
        </SubSection>

        <SubSection title="Compressor">
          <TextInput name="carga.compressor.descricao" label="Descrição" required />
          <TextInput name="carga.compressor.tag" label="TAG" required />
          <TextInput name="carga.compressor.marca" label="Marca" required />
          <TextInput name="carga.compressor.modelo" label="Modelo" required />
          
          <RadioInput name="carga.compressor.carga" label="Carga" row options={
            [
              { id: "ar", value: "ar", label: "Ar" },
              { id: "nh3", value: "nh3", label: "NH3" },
              { id: "co2", value: "co2", label: "CO2" },
              { id: "freon", value: "freon", label: "Freon" },
              { id: "alternativo", value: "alternativo", label: "Alternativo" },
            ]
          }/>
          
          <RadioInput name="carga.compressor.tipo" label="Tipo" row options={
            [
              { id: "tipoV", value: "tipoV", label: "Tipo \"V\"" },
              { id: "tipoW", value: "tipoW", label: "Tipo \"W\"" },
              { id: "tipoI", value: "tipoI", label: "Tipo \"I\"" },
              { id: "pistoesOpostos", value: "pistoesOpostos", label: "Pistões opostos" },
              { id: "pistoesLinha", value: "pistoesLinha", label: "Pistões em linha" },
              { id: "horizontal", value: "horizontal", label: "Horizontal" },
              { id: "centrifugo", value: "centrifugo", label: "Centrífugo" },
              { id: "simplesEstagio1", value: "simplesEstagio1", label: "Simples estágio 01 impelidor" },
              { id: "simplesEstagio2", value: "simplesEstagio2", label: "Múltiplos estágios 2 impelidores" },
              { id: "simplesEstagio3", value: "simplesEstagio3", label: "Múltiplos estágios 3 impelidores" },
              { id: "simplesEstagio31", value: "simplesEstagio31", label: "Múltiplos estágios 3 impelidores" },
              { id: "parafuso", value: "parafuso", label: "Parafuso" },
              { id: "simplesEstagio", value: "simplesEstagio", label: "Simples Estágio" },
              { id: "multiploEstagio", value: "multiploEstagio", label: "Múltiplo Estágio" },
            ]
          }/>
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
