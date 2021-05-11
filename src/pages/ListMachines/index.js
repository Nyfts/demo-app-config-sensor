import React, { useEffect, useState, useRef } from "react";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";
import { useLoading } from "../../contexts/loading";
import api from "../../services/api";

import TextInput from "../../components/TextInput";
import Section from "../../components/Section";

import "./index.css";

function ListMachines() {
  const formRef = useRef();
  const loading = useLoading();

  const [machines, setMachines] = useState([]);

  const handleFormSubmit = async (data) => {
    try {
      loading.showLoading();

      const response = await api.post(
        "sugestao",
        {
          comentario: data?.sugestao,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Sugestão enviada com sucesso!");
      formRef.current.reset();
    } catch (error) {
      alert("Não foi possível completar sua requisição");
      console.error(error);
    } finally {
      loading.hideLoading();
    }
  };

  useEffect(() => {
    (async () => {
      try {
        loading.showLoading();

        const response = await api.get("equipamento");

        setMachines(response?.data?.equipamentos);
        console.log(response.data?.equipamentos);
      } catch (error) {
        alert("Não foi possível completar sua requisição");
        console.error(error);
      } finally {
        loading.hideLoading();
      }
    })();
  }, []);

  const history = useHistory();

  const createNew = () => {
    history.push("/cadastrar");
  };

  const editMachine = (id) => {
    history.push("/editar/" + id);
  };

  return (
    <div>
      <div className="list-machines">
        <div className="list-machines-row">
          <h1 className="list-machines-title">Lista de Equipamentos</h1>
          <button className="list-machines-item-button" onClick={createNew}>
            Cadastrar novo equipamento
          </button>
        </div>
        <div className="hr" />
        <div
          style={{
            overflow: "auto",
            maxHeight: "500px",
            margin: "10px",
            padding: "10px",
          }}
        >
          {machines.map((machine) => {
            return (
              <div className="list-machines-item" id={machine.id}>
                <p className="list-machines-item-label">
                  {machine.nome || "Sem nome"}
                </p>
                <button
                  className="list-machines-item-button return-button"
                  onClick={() => editMachine(machine["id:"])}
                >
                  Editar
                </button>
              </div>
            );
          })}
        </div>

        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <div className="list-machines-suggestion">
            <TextInput name="sugestao" label="Enviar sugestão" />
            <button
              type="submit"
              className="list-machines-item-button return-button"
            >
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ListMachines;
