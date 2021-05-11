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

  const handleFormSubmit = async (data) => {
    var myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');

    const response = await fetch('http://localhost:5000/main/api/v1/cadastro', {
      method: 'POST',
      body: data,
      headers: myHeaders
    })

    console.log(response);
  };

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Section title="Equipamento">
        <TextInput name="equipamento.area" label="Area" />
        <TextInput name="equipamento.setor" label="Setor" />
        <TextInput name="equipamento.conjunto" label="Conjunto" />
        <TextInput name="equipamento.equipamento" label="Equipamento" />
        {/* <TextInput name="tag" label="Tag" /> */}
      </Section>

      <Section title="SUBCONJUNTO - ACIONAMENTO">
        <RadioInput name="motor.tipo" label="Tipos Motor" row required options={
          [
            { id: "motoIndução", value: "motoIndução", label: "Motor de indução" },
            { id: "motorSincrono", value: "motorSincrono", label: "Motor Síncrono" },
            { id: "geradorEnergia", value: "geradorEnergia", label: "Gerador de Energia" },
            { id: "servoMotor", value: "servoMotor", label: "Servo Motor" },
          ]
        }/>
        <TextInput name="motor.descricao" label="Descrição" required />
        <TextInput name="motor.tag" label="TAG" required />
        <TextInput name="motor.fabricante" label="Fabricante" required />
        <TextInput name="motor.carcaca" label="Carcaça" />

        <SubSection title="Potência" row>
          <TextInput name="motor.potencia_cv" label="CV" required />
          <TextInput name="motor.potencia_kw" label="Kw" required />
          <TextInput name="motor.potencia_rpm" label="RPM" required />
          <TextInput name="motor.tensao" label="Tensão (V)" required />
          <TextInput name="motor.corrente" label="Corrente (I)" required />
          <TextInput name="motor.frequencia" label="Frequência (Hz)" required />
          <TextInput name="motor.classe_isolacao" label="Classe de Isolação" />
          <TextInput name="motor.ip" label="IP" />
          <TextInput name="motor.rendimento" label="Rendimento (%)" />
          <TextInput name="motor.fs" label="Fator de Serviço" />
          <TextInput name="motor.fp" label="Fator de Potência" />
          <TextInput name="motor.categoria" label="Categoria" />
          <TextInput name="motor.acionamento" label="Acionamento" />
          <TextInput name="motor.fixacao" label="Fixação" />
        </SubSection>

        <SubSection title="Mancais do Motor" row>
          <RadioInput name="motor.mancal.tipo" label="Mancais" options={
          [
            { id: "deslizeCasquilho", value: "deslizeCasquilho", label: "Deslize / Casquilho" },
            { id: "rolamento", value: "rolamento", label: "Rolamento" }
          ]
        }/>
          <TextInput name="motor.mancal.la" label="LA" />
          <TextInput name="motor.mancal.lub_mancal_la" label="Lubrificação mancal LA" />
          <TextInput name="motor.mancal.lub_mancal_loa" label="Lubrificação mancal LOA" />
          <TextInput name="motor.mancal.graxa" label="Graxa" />
          <TextInput name="motor.mancal.oleo" label="Oleo" />
        </SubSection>

        {/* <RadioInput name="acionamento.partidaEletrica" label="Acionamento de Partida Elétrica" required options={
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
        }/>*/}
      </Section> 

      <Section title="SUBCONJUNTO - TRANSMISSÃO">
        <SubSection title="Acoplamento">
          <RadioInput name="transmissao.acoplamento.tipo" label="Acoplamento" row required options={
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
          <TextInput name="transmissao.acoplamento.marca" label="Marca" required />
          <TextInput name="transmissao.acoplamento.modelo" label="Modelo" required />
        </SubSection>

        <SubSection title="Eixo Cardan">
          <RadioInput name="transmissao.eixo_candan" label="Eixo Candan" row required options={
            [
              { id: "acionamentoAngulo", value: "acionamentoAngulo", label: "Acionamento em ângulo" },
              { id: "acionamentoReto", value: "acionamentoReto", label: "Acionamento reto" },
              { id: "eixoEspacador", value: "eixoEspacador", label: "Eixo espaçador" },
            ]
          }/>
        </SubSection>
        
        <SubSection title="Potias / Correias" row>
          <RadioInput name="transmissao.polia_correia.tipo" row required options={
            [
              { id: "tipoPolia1", value: "tipoPolia1", label: "Tipo polia 1" },
              { id: "tipoPolia2", value: "tipoPolia2", label: "Tipo polia 2" },
            ]
          }/>
          <TextInput name="transmissao.polia_correia.motriz" label="Motriz (d1)" required />
          <TextInput name="transmissao.polia_correia.movida" label="Movida (d2)" required />
          <TextInput name="transmissao.polia_correia.relacao" label="Relação" required />
          <TextInput name="transmissao.polia_correia.entre_eixos" label="Entre Eixos (L)" required />
          <TextInput name="transmissao.polia_correia.n_correias" label="Nº de Correias" required />
        </SubSection>
        
        <SubSection title="Coroa / Corrente" row>
          <RadioInput name="transmissao.coroa_corrente.tipo" row required options={
            [
              { id: "tipoCoroa1", value: "tipoCoroa1", label: "Tipo coroa 1" },
              { id: "tipoCoroa2", value: "tipoCoroa2", label: "Tipo coroa 2" },
            ]
          }/>
          <TextInput name="transmissao.coroa_corrente.dentes_matriz" label="Dentes da Engrenagem Matriz (Z1)" required />
          <TextInput name="transmissao.coroa_corrente.dentes_motora" label="Dentes da Engrenagem Motora (Z2)" required />
          <TextInput name="transmissao.coroa_corrente.relacao" label="Relação" required />
          <TextInput name="transmissao.coroa_corrente.gap_eixos" label="Entre Eixos (L)" required />
        </SubSection>

        <SubSection title="Redutor">
          <TextInput name="transmissao.redutor.descricao" label="Descrição" required />
          <TextInput name="transmissao.redutor.tag" label="TAG" required />
          <TextInput name="transmissao.redutor.marca" label="Marca" />
          <TextInput name="transmissao.redutor.modelo" label="Modelo" />
          <TextInput name="transmissao.redutor.n_serie" label="Número de Série" />
          <TextInput name="transmissao.redutor.relacao" label="Relação" required />
          <TextInput name="transmissao.redutor.n_eixos" label="Nº de Eixos" required />
          
          
          <RadioInput name="transmissao.redutor.tipo" row label="Tipo Redutor" options={
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
            <TextInput name="transmissao.redutor.rpm_entrada" label="RPM" />
            <TextInput name="transmissao.redutor.rol_la_entrada" label="Rol. LA" />
            <TextInput name="transmissao.redutor.rol_loa_entrada" label="Rol. LOA" />
            <TextInput name="transmissao.redutor.z_pinhao_entrada" label="Z Pinhão" />
            <TextInput name="transmissao.redutor.z_coroa_entrada" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 1" row >
            <TextInput name="transmissao.intermediario1.rol_la_inter1" label="Rol. LA" />
            <TextInput name="transmissao.intermediario1.rol_loa_inter1" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario1.z_pinhao_inter1" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario1.z_coroa_inter1" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 2" row >
            <TextInput name="transmissao.intermediario2.rol_la_inter2" label="Rol. LA" />
            <TextInput name="transmissao.intermediario2.rol_loa_inter2" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario2.z_pinhao_inter2" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario2.z_coroa_inter2" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 3" row >
            <TextInput name="transmissao.intermediario3.rol_la_inter3" label="Rol. LA" />
            <TextInput name="transmissao.intermediario3.rol_loa_inter3" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario3.z_pinhao_inter3" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario3.z_coroa_inter3" label="Z Coroa" />
          </SubSection>

          <SubSection title="Intermediário 4" row >
            <TextInput name="transmissao.intermediario4.rol_la_inter4" label="Rol. LA" />
            <TextInput name="transmissao.intermediario4.rol_loa_inter4" label="Rol. LOA" />
            <TextInput name="transmissao.intermediario4.z_pinhao_inter4" label="Z Pinhão" />
            <TextInput name="transmissao.intermediario4.z_coroa_inter4" label="Z Coroa" />
          </SubSection>

          <SubSection title="Saída" row >
            <TextInput name="transmissao.saida.rpm_saida" label="RPM" />
            <TextInput name="transmissao.saida.rol_la_saida" label="Rol. LA" />
            <TextInput name="transmissao.saida.rol_loa_saida" label="Rol. LOA" />
            <TextInput name="transmissao.saida.z_pinhao_saida" label="Z Pinhão" />
            <TextInput name="transmissao.saida.z_coroa_saida" label="Z Coroa" />
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

          <RadioInput name="carga.bomba.estagio" row label="Estágio" options={
            [
              { id: "simplesEstagio", value: "simplesEstagio", label: "Simples Estágio" },
              { id: "multiplosEstagio", value: "multiplosEstagio", label: "Múltiplos Estágio" },
            ]
          }/>

          <SubSection title="Lubrificação" row >
            <RadioInput name="carga.bomba.lub" options={
              [
                { id: "oleo", value: "oleo", label: "Óleo" },
                { id: "graxa", value: "graxa", label: "Graxa" },
              ]
            }/>
            {/* <RadioInput name="carga.bomba.lubrificacaoTipo" options={
                [
                  { id: "comPinoGraxeiro", value: "comPinoGraxeiro", label: "Com pino graxeiro" },
                  { id: "semPinoGraxeiro", value: "semPinoGraxeiro", label: "Sem pino graxeiro" },
                ]
            }/> */}
          </SubSection>

        </SubSection>

        <SubSection title="Ventilador / Exautos">
          <TextInput name="carga.ventilador.descricao" label="Descrição" required />
          <TextInput name="carga.ventilador.tag" label="TAG" required />
          <TextInput name="carga.ventilador.marca" label="Marca" />
          <TextInput name="carga.ventilador.modelo" label="Modelo" />
          <TextInput name="carga.ventilador.o_rotor" label="0 do Rotor" />
          <TextInput name="carga.ventilador.numero_pas" label="Número de Pás" />
          
          <RadioInput name="carga.ventilador.tipo" row options={
            [
              { id: "noBalanco", value: "noBalanco", label: "Em Balanço" },
              { id: "entreMancais", value: "entreMancais", label: "Entre Mancais" },
              { id: "noEixoMotriz", value: "noEixoMotriz", label: "No eixo motriz" },
            ]
          }/>
          
          <SubSection title="Lubrificação" row >
            <RadioInput name="carga.ventilador.lub" options={
              [
                { id: "oleo", value: "oleo", label: "Óleo" },
                { id: "graxa", value: "graxa", label: "Graxa" },
              ]
            }/>
            {/* <RadioInput name="carga.ventilador.lubrificacaoTipo" options={
                [
                  { id: "comPinoGraxeiro", value: "comPinoGraxeiro", label: "Com pino graxeiro" },
                  { id: "semPinoGraxeiro", value: "semPinoGraxeiro", label: "Sem pino graxeiro" },
                ]
            }/> */}
          </SubSection>
        </SubSection>

        <SubSection title="Coleta de Lubrificante">
          <RadioInput name="carga.coleta_lub.tipo" label="Tipo" row options={
            [
              { id: "oleoLubrificante", value: "oleoLubrificante", label: "Óleo Lubrificante" },
              { id: "oleoHidraulico", value: "oleoHidraulico", label: "Óleo Hidráulico" },
              { id: "graxa", value: "graxa", label: "Graxa" },
            ]
          }/>

          <TextInput name="carga.coleta_lub.nome_comercial" label="Nome Comercial" required />
          <TextInput name="carga.coleta_lub.marca" label="Marca" required />
          <TextInput name="carga.coleta_lub.caracteristicas" label="Caracteristicas" required />
          <TextInput name="carga.coleta_lub.viscosidade" label="Viscosidade" required />
          <TextInput name="carga.coleta_lub.ponto_coleta" label="Ponto Coleta" required />
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
